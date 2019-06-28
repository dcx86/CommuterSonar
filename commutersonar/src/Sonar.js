import React from 'react';
import icon from './icons/hearing.svg';
import './Sonar.css';

function Sonar() {

  const saveAlarm = () => {
    document.querySelector('.Sonar__setAlarm').className = "Sonar__alarm";
    document.querySelector('.Sonar__button').setAttribute('hidden', true);
  }

  return (
    <div className="Sonar">

      <div className="Sonar__setAlarm">
        <div className="Sonar__alarm__header">
          <p>Navestahage</p>
        </div>
        <img src={icon} className="Sonar__alarm__logo" alt="logo" />
        <p>00 : 00 : 37</p>
        <button className="Sonar__button" onClick={saveAlarm}>SET SONAR</button>
      </div>

    </div>
  );
}

export default Sonar