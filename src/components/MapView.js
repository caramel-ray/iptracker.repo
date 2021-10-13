import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapView = (props) => {
    const { coords } = props
    console.log();
    return (
        <div className="map-view">
        <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />
            <Marker position={coords}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>
    )
}

export default MapView
