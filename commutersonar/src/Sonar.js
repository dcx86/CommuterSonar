import React from 'react';
import icon from './icons/hearing.svg';
import './Sonar.css';

function Sonar({stateSonar}) {

  const saveAlarm = () => {
    document.querySelector('.Sonar__setAlarm').className = "Sonar__alarm";
    document.querySelector('.Sonar__button').setAttribute('hidden', true);
  }

  return (
    <div className="Sonar">

      <div className="Sonar__setAlarm">
        <div className="Sonar__alarm_header">
          { stateSonar && <h1>{stateSonar.product.name}</h1> }
        </div>
        <img src={icon} className="Sonar__alarm__logo" alt="logo" />
        <div className="Sonar__body">
          { stateSonar && <h3>{stateSonar.origin.time} - {stateSonar.destination.time}</h3> }
          { stateSonar && <h3>{ stateSonar.origin.name } - { stateSonar.destination.name }</h3>}
          { stateSonar && <h3>in</h3>}
          { stateSonar && <h3>{ stateSonar.origin.time }</h3>}
        </div>
        <button className="Sonar__button" onClick={saveAlarm}>SET SONAR</button>
      </div>

    </div>
  );
}

export default Sonar