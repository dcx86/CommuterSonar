import React from 'react';
import icon from './icons/hearing.svg';
import './App.css';

function Main() {
  return (
    <section className="Main">
    <div className="Main__sonar">

      <div className="Main__sonar__alarm">
        <div className="Main__sonar__alarm__header">
          <p>Navestahage</p>
        </div>
        <img src={icon} className="Main__sonar__alarm__logo" alt="logo" />
        <p>00 : 00 : 37</p>
      </div>

      <div className="Main__sonar__alarm">
        <div className="Main__sonar__alarm__header">
          <p>Uppsala</p>
        </div>
        <img src={icon} className="Main__sonar__alarm__logo" alt="logo" />
        <p>00 : 47 : 12</p>
      </div>
      
      <div className="Main__sonar__alarm">
        <div className="Main__sonar__alarm__header">
          <p>Stockholm</p>
        </div>
        <img src={icon} className="Main__sonar__alarm__logo" alt="logo" />
        <p>06 : 01 : 57</p>
      </div>

    </div>
  </section>
  );
}

export default Main;