import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import makeSound from './sound';
import {getGeolocation, getTime} from './resrobot';

function App() {
  const [stateFromGeolocation, setStateFromGeolocation] = useState(undefined);
  const [stateToGeolocation, setStateToGeolocation] = useState(undefined);
  const [stateTrip, setStateTrip] = useState(undefined);

  const getInput = async () => {
    const [ travelFrom, travelTo ] = document.querySelectorAll('input');
    getGeolocation(travelFrom.value, setStateFromGeolocation);
    getGeolocation(travelTo.value, setStateToGeolocation);
    makeSound(Date.now());
    getTime({lat: 59.8586, lon: 17.6389}, {lat: 59.3293, lon: 18.0686}, setStateTrip)
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
