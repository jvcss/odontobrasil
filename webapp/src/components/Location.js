import React, { useMemo} from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoBox } from "@react-google-maps/api";
import "./Location.css"
import { LinearProgress } from "@mui/material";

const uri = "https://www.google.com/maps/place/Odonto+Brasil/@-16.620701,-49.2152994,19z/data=!3m1!4b1!4m12!1m6!3m5!1s0x935ef35883ee7465:0xc957b31dc4f674a7!2sOdonto+Brasil!8m2!3d-16.620701!4d-49.2147522!3m4!1s0x935ef35883ee7465:0xc957b31dc4f674a7!8m2!3d-16.620701!4d-49.2147522"


function Map() {
 
  const center = useMemo(() => ({ lat: -16.620801605416048, lng: -49.21472231460674 }), []);

  return (

    <GoogleMap 
    
    zoom={17} 
    center={center} 
    mapContainerClassName="map-container">

      <MarkerF position={center} onClick={() => window.open(uri, "_blank")}/>
    </GoogleMap>
  );
}

/**
 FALTA EXIBIR UM CARD BONITO COM UM SLIDE DENTRO .
<Card
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
 */
export default function Location() {
  //console.log(process.env.REACT_APP_KEY)
  //console.log(process.env.NODE_ENV)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_KEY
  });
  //console.log(isLoaded)
  /// LOAD IMAGE INVERT 
  //isLoaded || 
  if (!isLoaded) return (<LinearProgress color="inherit" />)
  return <Map />;
}

