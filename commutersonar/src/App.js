import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const getInput = () => {
    const [ travelFrom, travelTo ] = document.querySelectorAll('input');
    console.log(travelFrom.value, travelTo.value)
  }

  return (
    <div className="App">
      <header className="App__header">
        <input className="App__input" type="text" placeholder="From:"></input>
        <input className="App__input" type="text" placeholder="To:"></input>
        <button className="App__button" onClick={getInput}>Search</button>
      </header>
    </div>
  );
}

export default App;
