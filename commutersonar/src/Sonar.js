import React from 'react';
import icon from './icons/hearing.svg';
import './Sonar.css';

function Main() {
  return (
    <div className="Sonar">

      <div className="Sonar__alarm">
        <div className="Sonar__alarm__header">
          <p>Navestahage</p>
        </div>
        <img src={icon} className="Sonar__alarm__logo" alt="logo" />
        <p>00 : 00 : 37</p>
      </div>

    </div>
  );
}

export default Main