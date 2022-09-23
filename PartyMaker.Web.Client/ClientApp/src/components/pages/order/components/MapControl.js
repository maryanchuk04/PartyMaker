import React, { useState } from "react";
import SimpleModal from "../../../ui/SimpleModal";
import AutoComplete from "./AutoComplete";
import { Button } from "@mui/material";
import Map from "../../../ui/map";
const MapControl = ({ handleChooseLocation }) => {
  const [open, setOpen] = useState(false);
  const [locationState, setLocationState] = useState({
    location: "",
    latitude: 0,
    longitude: 0,
  });

  const handleOpen = () => {
    setOpen(true);
  };
  function handleSubmit() {
    handleChooseLocation(locationState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex align-items-center my-2 justify-content-between">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleOpen}
          startIcon={<i className="fas fa-map"></i>}
        >
          Map
        </Button>
        {open ? (
          <SimpleModal
            open={open}
            close={() => setOpen(false)}
            title={"Delivery address"}
            handleSubmit={handleSubmit}
          >
            <div>
              <Map handleSelect={setLocationState} />
            </div>
          </SimpleModal>
        ) : null}
        <Button variant="outlined" type="submit">
          Save
        </Button>
      </div>
      <AutoComplete fromMapValue={locationState.location} />
    </form>
  );
};

export default MapControl;
