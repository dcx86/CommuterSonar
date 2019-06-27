import React, { useState, useEffect } from 'react';
import Header from './Header';
import Search from './Search';
import Main from './Main';
import Footer from './Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
