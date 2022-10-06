import React, { useState, useEffect } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import "./autocomplete.css";
import useOnclickOutside from "react-cool-onclickoutside";
import { Divider, TextField } from "@mui/material";

const AutoComplete = ({ setCoordinates, fromMapValue, disable }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
    debounce: 300,
  });
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(fromMapValue);
  }, [fromMapValue]);

  const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        setCoordinates({
          location : description,
          latitude : lat,
          longitude : lng
        });
      });
    };

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <>
          <li
            key={place_id}
            onClick={handleSelect(suggestion)}
            className="ac-item"
          >
            <small>{main_text}</small> <small>{secondary_text}</small>
          </li>
          <Divider sx={{ borderColor: "black" }} />
        </>
      );
    });

  return (
    <div ref={ref} className="w-100 my-2" style={{ position: "relative" }}>
      <TextField
        label="Search location"
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Search location..."
        className="w-100"
        autoComplete="off"
        required
        aria-readonly={disable}
      />
      <div className="drop-area">
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>
    </div>
  );
};

export default AutoComplete;
