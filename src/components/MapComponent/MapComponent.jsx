import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const MapComponent = ({ latitude, longitude }) => {
  const lat = latitude || 51.505;  
  const lng = longitude || -0.09; 

  return (
    <MapContainer center={[lat, lng]} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]} />
    </MapContainer>
  );
};
export default MapComponent;