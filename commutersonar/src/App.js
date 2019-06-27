import React, { useState } from 'react';
import Header from './Header';
import Search from './Search';
import Workspace from './Workspace';
import Footer from './Footer';

import './App.css';

function App() {
  const [stateTripInfo, setStateTripInfo] = useState(undefined);

  return (
    <div className="App">
      <Header />
      <Search stateTripInfo={stateTripInfo} setStateTripInfo={setStateTripInfo}/>
      <Workspace stateTripInfo={stateTripInfo} />
      <Footer />
    </div>
  );
}

export default App;
