import React from 'react';
import './Card.css';

function Card({ stateTripInfo }) {
  return (
    <div className="Card">
      <div className="Card__header">
        { stateTripInfo && <p>{stateTripInfo.name}</p> }
      </div>
      <div className="Card__body">
        { stateTripInfo && <p>{stateTripInfo.time}</p> }
      </div>
    </div>
  );
}

export default Card