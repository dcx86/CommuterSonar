import React, { useState, useEffect } from 'react';
import './Search.css';
import setSonar from './setSonar';
import {getGeolocation, getTime} from './resrobot';

function Nav() {

  const [stateFromGeolocation, setStateFromGeolocation] = useState(undefined);
  const [stateToGeolocation, setStateToGeolocation] = useState(undefined);
  const [stateTrip, setStateTrip] = useState(undefined);

  useEffect(() => {
    if (stateFromGeolocation && stateToGeolocation) {
      getTime(stateFromGeolocation, stateToGeolocation, setStateTrip)
    }

  }, [stateFromGeolocation, stateToGeolocation])
  
  useEffect(() => {
    if (stateTrip) {
      setSonar(stateTrip);
    }
  }, [stateTrip]) 

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
    <nav className="Nav">
      <div className="Nav__header">
        <p>Search journey</p>
      </div>
      <input className="Nav__input" type="text" placeholder="From:"></input>
      <input className="Nav__input" type="text" placeholder="To:"></input>
      <button className="Nav__button" onClick={search}>Search</button>
    </nav>
  );
}

export default Nav;