import React from 'react';
import './Workspace.css';
import Card from './Card';
import Sonar from './Sonar';

function Workspace({ stateTripInfo }) {
  return (
    <section className="Workspace">
      <Card stateTripInfo={stateTripInfo} />
    </section>
  );
}

export default Workspace