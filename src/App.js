import React, { Component } from 'react';
import Person from './component/Person/Person'
import Post from './component/Post/post'

import './App.css';

class App extends Component {
  state ={
    Bikes:[
      {brand:"Yamaha", model:"R15"},
      {brand:"Suzuki", model:"GSX150"},
      {brand:"Honda", model:"CBR150"}
    ]
  };
  modelNameHandler=(newBike)=>{
    this.setState({
      Bikes:[
        {brand:"Yamaha", model:newBike},
        {brand:"Suzuki", model:"GSX150"},
        {brand:"KTM", model:"RC200"}
      ]
    })
  }
  render() {
    return (
      <div className="content">
        <button onClick={this.modelNameHandler.bind(this,'R3')}>Change Model</button>
        <Person brand={this.state.Bikes[0].brand} model={this.state.Bikes[0].model} />
        <Person brand={this.state.Bikes[1].brand} model={this.state.Bikes[1].model}> with 16BHP</Person>
        <Person brand={this.state.Bikes[2].brand} model={this.state.Bikes[2].model}/>
        <Post></Post>
      </div>
    );
  };
 
}

export default App;
