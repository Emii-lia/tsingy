"use client"
import React, { useRef, useEffect } from 'react';
import L, {marker, tileLayer} from 'leaflet'
import location from '../../../../untitled/src/assets/image/location.png'

import 'leaflet/dist/leaflet.css'
const CanvasMap = ({ center, zoom, position }:{
    center:L.LatLngExpression,
    zoom:number,
    position:L.LatLngExpression
}) => {
    const mapRef = useRef(null);
    const map = useRef<null|L.Map>(null)
    const customIcon = L.icon({
        iconUrl: location.src, // Replace with your icon path
        iconSize: [28, 28], // Size of the icon
    });
    useEffect(() => {
        // Initialize the map on mount
        if (map.current) return;
        map.current = new L.Map(mapRef.current!, {
            center: center,
            zoom:zoom
        })
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map.current!);
        if (position) {
            const marker = new L.Marker(position).setIcon(customIcon).addTo(map.current)
        }
    }, [center, zoom, position, customIcon]);

    return <div ref={mapRef} className={"w-full h-full rounded-lg shadow-sm"}  />;
};

export default CanvasMap;
