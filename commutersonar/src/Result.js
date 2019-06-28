import React from 'react';
import './Result.css';
import { getUnixTime } from './parsing'

function Result({ origin, destination, product }) {

  const openSonar = () => {
    document.querySelector('.Search__results').setAttribute('hidden', true);
    document.querySelector('.Sonar').style.display = 'flex';
  }

  return (
    <div className="Result">
      <div className="Result__header">
        { origin && <p>{origin.time} - {destination.time}</p> }
      </div>
      <div className="Result__body">
        <div className="Result__body__info">
          { product && <p>{product.name}</p> }
          { destination && <p>in { origin.time } from { origin.name }</p>}
        </div>
        <button className="Result__body__button" onClick={openSonar}>OPEN SONAR</button>
      </div>
    </div>
  );
}

export default Result