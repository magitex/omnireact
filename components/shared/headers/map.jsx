import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const MapExample = () => {
  const position = { lat: -33.8478796, lng: 150.7918932 };

  return (
    <Map center={position} zoom={4}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={position}
        onMouseOver={e => {
          e.target.openPopup();
        }}
        onMouseOut={e => {
          e.target.closePopup();
        }}
      >
        <Popup>Sydney</Popup>
      </Marker>
    </Map>
  );
};

export default MapExample;
