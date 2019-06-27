import React, { useState, useEffect } from 'react';
import './Search.css';
import Result from './Result';
import setSonar from './setSonar';
import {fetchGeolocation, fetchCurrentGeolocation, fetchTripInfo} from './fetchApi';

function Search({ stateTripInfo, setStateTripInfo }) {
  const [ stateOrigin, setStateOrigin ] = useState(undefined);
  const [ stateDestination, setStateDestination ] = useState(undefined);

  useEffect(() => {
    if (stateOrigin && stateDestination) {
      fetchTripInfo(stateOrigin, stateDestination, setStateTripInfo)
    }
  }, [ stateOrigin, stateDestination, setStateTripInfo ])
  
  useEffect(() => {
    // if (stateTripInfo) setSonar(stateTripInfo);
  }, [ stateTripInfo ]) 

  const searchTrip = () => {
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

  const parseTrip = ( tripInfo ) => {

  }

  return (
    <nav className="Search">
      <div className="Search__header">
        <p>Search journey</p>
      </div>
      <input className="Search__input" type="text" placeholder="From: " hidden></input>
      <input className="Search__input" type="text" placeholder="Hi, where do you want to go?"></input>
      <button className="Search__button" onClick={searchTrip}>Search</button>
      { stateTripInfo && stateTripInfo.map((trip, i) => {
        const { Origin, Destination, Product } = trip.LegList.Leg[1];
        return ( <Result key={i} origin={Origin} destination={Destination} product={Product} /> );
      })}
    </nav>
  );
}

export default Search;