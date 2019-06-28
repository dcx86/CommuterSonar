import React from 'react';
import './Workspace.css';
import Sonar from './Sonar';

function Workspace({ stateTripInfo }) {
  return (
    <section className="Workspace">
      <Sonar />
    </section>
  );
}

export default Workspace