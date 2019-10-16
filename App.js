import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './views/MapContainer'

function App() {
  const mapStyles = {
    width: '100%',
    height: '100%',
  };

  return (
    <MapContainer></MapContainer>
  );
}

export default App;
