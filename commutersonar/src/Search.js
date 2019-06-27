import React, { useState, useEffect } from 'react';
import './Search.css';
import setSonar from './setSonar';
import {fetchGeolocation, fetchCurrentGeolocation, fetchTripInfo} from './fetchApi';

function Nav() {

  const [stateOrigin, setStateOrigin] = useState(undefined);
  const [stateDestination, setStateDestination] = useState(undefined);
  const [stateTripInfo, setStateTripInfo] = useState(undefined);

  useEffect(() => {
    if (stateOrigin && stateDestination) {
      fetchTripInfo(stateOrigin, stateDestination, setStateTripInfo)
    }
  }, [stateOrigin, stateDestination])
  
  useEffect(() => {
    if (stateTripInfo) setSonar(stateTripInfo);
  }, [stateTripInfo]) 

  const search = () => {
    const trip = getInput();
    fetchGeolocation(trip.destination, setStateDestination);

    if (!trip.origin) {
      fetchCurrentGeolocation(setStateOrigin);
      return;
    }

    fetchGeolocation(trip.origin, setStateOrigin);
  }

  const getInput = () => {
    const [ originRaw, destinationRaw ] = document.querySelectorAll('input');
    const origin = originRaw.value.trim().toLowerCase();
    const destination = destinationRaw.value.trim().toLowerCase();

    return { origin, destination }
  }

  return (
    <nav className="Search">
      <div className="Search__header">
        <p>Search journey</p>
      </div>
      <input className="Search__input" type="text" placeholder="From: " hidden></input>
      <input className="Search__input" type="text" placeholder="Hi, where do you want to go?"></input>
      <button className="Search__button" onClick={search}>Search</button>
    </nav>
  );
}

export default Nav;