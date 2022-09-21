import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import { reverseGeocode } from '../../utils/helpers';
import { width } from '@mui/system';

const Map = () => {
  const defaultProps = {
    center: {
      lat: 50.4501,
      lng: 30.5234
    },
  };
  const [center, setCenter] = useState({...defaultProps.center});
  
  const [xy,setXY]=useState({});
  useEffect(()=>{
    
  },[]) 
  const renderMarkers = (map, maps, coordinates)=>{
    let marker = new maps.Marker({
      position : {lat : center.lat, lng : center.lng},
      map,
      title : 'hello'
    });
    return marker;
  }
  return (
    <div style ={{height : "50vh", width : "100%", position : "relative"}}>
        <GoogleMapReact
        // bootstrapURLKeys ={{key :"AIzaSyD9-r_Ld4Z62DmAYFDGRoBt4G-F1wW9RGU"}}
        defaultCenter={defaultProps.center}
        defaultZoom={8}
        center = {center}
        onClick = {async (coordinates)=> {
          setCenter({lat : coordinates.lat, lng: coordinates.lng});
          const res = await reverseGeocode({lng : coordinates.lng, lat : coordinates.lat});
          console.log(res);
          
          
        }}
      >
      <Marker/>
      </GoogleMapReact>
    </div>
  )
}

const Marker = props =>{
  return <div >
      <img src = {"https://i.ibb.co/fqjPpg1/air-balloons-1.png"} style = {{height : "40px", width : "34px", margin : "-40px -17px 10px -17px"}}/>
  </div>
  
}

export default Map