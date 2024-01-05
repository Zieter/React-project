import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Googlemap() {
    const mapStyles = {
        height: '22rem',
        width: '100%',
    };
    
    const Center = {
        lat: 25.042253494262695,
        lng: 121.54497528076172
    };
    
    const Position = {
        lat: 25.042253494262695,
        lng: 121.54497528076172
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyAWsiRiOLHI-Gou9-GDdjlX7Nus6_aQpdI">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={18}
                center={Center}
            >
                <Marker position={Position} title='遠東SOGO台北忠孝館VIP LOUNGE' />
            </GoogleMap>
        </LoadScript>
    );

}

export default Googlemap;