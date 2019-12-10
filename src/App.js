import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state ={
    Bikes:[
      {brand:"Yamaha", model:"R15"},
      {brand:"Suzuki", model:"GSX150"},
      {brand:"Honda", model:"CBR150"}
    ]
  };
  render() {
    return (
      <div >
        <header >
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Person brand={this.state.Bikes[0].brand} model={this.state.Bikes[0].model} />
        <Person brand={this.state.Bikes[1].brand} model={this.state.Bikes[1].model}> with 16BHP</Person>
        <Person brand={this.state.Bikes[2].brand} model={this.state.Bikes[2].model}/>
  
      </div>
    );
  };
 
}

export default App;
