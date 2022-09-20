import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "./Location.css"
import { CircularProgress } from "@mui/material";
export default function Location() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: ""// "AIzaSyAxw-5p0DwPJ9lXRaTCJFSvvJcYuIMkxfs",
    });

    /// LOAD IMAGE INVERT
    if (isLoaded) return (
    <div style={{ textAlign: "center" }}>
        <CircularProgress />
    </div>);
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: -16.620801605416048, lng: -49.21472231460674 }), []);
    //, 
    return (
        <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">

            <MarkerF position={center} onClick={console.log()} />
        </GoogleMap>
    );
}