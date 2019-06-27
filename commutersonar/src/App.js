import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import setSonar from './setSonar';
import {getGeolocation, getTime} from './resrobot';

function App() {
  const [stateFromGeolocation, setStateFromGeolocation] = useState(undefined);
  const [stateToGeolocation, setStateToGeolocation] = useState(undefined);
  const [stateTrip, setStateTrip] = useState(undefined);

  useEffect(() => {
    if (!setStateFromGeolocation) return
    if (!stateToGeolocation) return

    getTime(stateFromGeolocation, stateToGeolocation, setStateTrip)
  }, [stateFromGeolocation, stateToGeolocation])


  const search = () => {
    const trip = getInput();
    getGeolocation(trip.origin, setStateFromGeolocation);
    getGeolocation(trip.destination, setStateToGeolocation);
  }

  const getInput = () => {
    const [ originRaw, destinationRaw ] = document.querySelectorAll('input');
    const origin = originRaw.value.trim().toLowerCase();
    const destination = destinationRaw.value.trim().toLowerCase();

    return { origin, destination }
  }

  return (
    <div className="App">
      <header className="App__header">
        <input className="App__input" type="text" placeholder="From:"></input>
        <input className="App__input" type="text" placeholder="To:"></input>
        <button className="App__button" onClick={search}>Search</button>
        {stateFromGeolocation && <p>{stateFromGeolocation.lat} {stateFromGeolocation.lon}</p>}
        {stateToGeolocation && <p>{stateToGeolocation.lat} {stateToGeolocation.lon}</p>}
        </header>
    </div>
  );
}

export default App;
