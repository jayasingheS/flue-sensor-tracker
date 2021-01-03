import React from 'react';
import Aux from '../../hoc/AuxHoc';
import './GoogleMaps.css';
import {withScriptjs ,withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const MyMapComponent  =(props)=>(

    <Aux>
       <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
        </GoogleMap>
    </Aux>
);

export default withScriptjs(withGoogleMap(MyMapComponent)) ;