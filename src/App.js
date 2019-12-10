import React from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './App.css';

function App() {
  return (
    <div >
      <header >
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Person brand="Yamaha" model="R15"/>
      <Person brand="Suzuki" model="GSX150"/>
      <Person brand="Honda" model="CBR150"/>

    </div>
  );
}

export default App;
