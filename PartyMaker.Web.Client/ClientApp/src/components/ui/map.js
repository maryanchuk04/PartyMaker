import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { reverseGeocode } from "../../utils/helpers";

const Map = ({ handleSelect, initCenter, disable = false }) => {
  const defaultProps = {
    center: {
      lat: 50.4501,
      lng: 30.5234,
    },
  };
  const [center, setCenter] = useState(initCenter || { ...defaultProps.center });

  useEffect(()=>{
    setCenter(initCenter)
  }, [initCenter])

  useEffect(() => {}, []);
  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={8}
        center={center}
        onClick={async (coordinates) => {
          if(!disable){
            setCenter({ lat: coordinates.lat, lng: coordinates.lng });
            const res = await reverseGeocode({
              lng: coordinates.lng,
              lat: coordinates.lat,
            });
            console.log(res);
            handleSelect({
              latitude: coordinates.lat,
              longitude: coordinates.lng,
              location: res.address.LongLabel,
            });
          }
          
        }}
      >
        <Marker />
      </GoogleMapReact>
    </div>
  );
};


const Marker = (props) => {
  return (
    <div>
      <img
        src={"https://i.ibb.co/fqjPpg1/air-balloons-1.png"}
        style={{
          height: "40px",
          width: "34px",
          margin: "-40px -17px 10px -17px",
        }}
        alt = "img"
      />
    </div>
  );
};

export default Map;
