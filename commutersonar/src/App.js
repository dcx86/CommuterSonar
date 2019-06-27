import React, { useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import Main from './Main';
import Footer from './Footer';

import './App.css';

function App() {
  const [stateTripInfo, setStateTripInfo] = useState(undefined);

  return (
    <div className="App">
      <Header />
      <Search stateTripInfo={stateTripInfo} setStateTripInfo={setStateTripInfo}/>
      <Main stateTripInfo={stateTripInfo} setStateTripInfo={setStateTripInfo}/>
      <Footer />
    </div>
  );
}

export default App;
