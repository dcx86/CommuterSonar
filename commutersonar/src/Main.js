import React from 'react';
import './Main.css';

function Main({ stateTripInfo, setStateTripInfo }) {
  return (
    <section className="Main">
      <div>
        { stateTripInfo && <h6>{stateTripInfo.name}</h6> }
        { stateTripInfo && <p>{stateTripInfo.time}</p> }
      </div>
    </section>
  );
}

export default Main