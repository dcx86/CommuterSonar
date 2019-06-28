import React from 'react';
import icon from './icons/hearing.svg';
import './Sonar.css';
import { getUnixTime } from './parsing';
import setSonar from './setSonar';

function Sonar({stateSonar}) {

  const saveAlarm = () => {
    alert('hi')
    // if (stateTripInfo) setSonar(stateTripInfo);
    // document.querySelector('.Sonar__setAlarm').className = "Sonar__alarm";
    // document.querySelector('.Sonar__button').setAttribute('hidden', true);
  }

  return (
    <div className="Sonar">

      <div className="Sonar__setAlarm">
        <div className="Sonar__alarm_header">
          { stateSonar && <h1>{stateSonar.product.name}</h1> }
        </div>
        <img src={icon} className="Sonar__alarm__logo" alt="logo" />
        <div className="Sonar__body">
          { stateSonar && <h3>{ stateSonar.origin.name }</h3> }
          { stateSonar && <h4>{ stateSonar.origin.time }</h4> }
          { stateSonar && <h3>{ stateSonar.destination.name }</h3>}
          { stateSonar && <h4>{ stateSonar.destination.time }</h4>}
          { stateSonar && <h3>in</h3>}
          { stateSonar && <h5>{ stateSonar.origin.time }</h5>}
        </div>
          { false && <button className="Sonar__button" onClick={saveAlarm}>SET SONAR</button> }
      </div>

    </div>
  );
}

export default Sonar