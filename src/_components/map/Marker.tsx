import React from 'react';
import {Marker} from "react-leaflet";

const MyMarker = ({ position }:{position:L.LatLngExpression}) => {
    return(
        <Marker position={position}></Marker>
    )
};

export default MyMarker;
