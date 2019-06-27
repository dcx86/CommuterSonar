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

    console.log(stateFromGeolocation, stateToGeolocation)
    getTime(stateFromGeolocation, stateToGeolocation, setStateTrip)
    // setSonar(stateTrip);
  }, [stateFromGeolocation, stateToGeolocation])

  const getInput = async () => {
    const [ travelFrom, travelTo ] = document.querySelectorAll('input');
    const trip = parseInput(travelFrom, travelTo);

    getGeolocation(trip.origin, setStateFromGeolocation);
    getGeolocation(trip.destination, setStateToGeolocation);
  }

  const parseInput = (originRaw, destinationRaw) => {
    const origin = originRaw.value.trim().toLowerCase();
    const destination = destinationRaw.value.trim().toLowerCase();
    return { origin, destination }
  }

  return (
    <div className="App">
      <header className="App__header">
        <input className="App__input" type="text" placeholder="From:"></input>
        <input className="App__input" type="text" placeholder="To:"></input>
        <button className="App__button" onClick={getInput}>Search</button>
        {stateFromGeolocation && <p>{stateFromGeolocation.lat} {stateFromGeolocation.lon}</p>}
        {stateToGeolocation && <p>{stateToGeolocation.lat} {stateToGeolocation.lon}</p>}
        {stateTrip && <p>{stateTrip}</p>}
        </header>
    </div>
  );
}

export default App;
