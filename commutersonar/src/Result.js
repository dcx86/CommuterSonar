import React from 'react';
import './Result.css';

function Result({ stateTripInfo }) {
  return (
    <div className="Result">
      <div className="Result__header">
        { stateTripInfo && <p>{stateTripInfo.name}</p> }
      </div>
      <div className="Result__body">
        { stateTripInfo && <p>{stateTripInfo.time}</p> }
      </div>
    </div>
  );
}

export default Result