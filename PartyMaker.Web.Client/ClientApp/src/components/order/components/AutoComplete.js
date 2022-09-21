import React, { useState } from 'react'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
import './autocomplete.css'
import useOnclickOutside from "react-cool-onclickoutside";
import { Divider, TextField } from '@mui/material';

const AutoComplete = ({setCoordinates}) => {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions,} = usePlacesAutocomplete({
        requestOptions: {},
        debounce: 300,
    });
    const handleInput = (e) => {
        setValue(e.target.value);
    };
    
    const handleSelect =
    ({ description }) =>
    () => {
      setValue(description, false);
      clearSuggestions();
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
        setCoordinates({ lat, lng })
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
                <li key={place_id} onClick={handleSelect(suggestion)} className = "ac-item">
                <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
                <Divider sx = {{borderColor: "black"}}/>
            </>
        );
    });

  return (
    <div ref={ref} className = 'w-100 my-2' style ={{position : "relative"}}>
        <TextField
            label= "Search location"
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search location..."
            className = 'w-100'
            autoComplete ="off"
        />
        <div className = 'drop-area'>
            {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </div>
  </div>
  )
}

export default AutoComplete