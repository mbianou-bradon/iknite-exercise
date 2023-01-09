import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;
