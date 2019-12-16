import React, { Component } from "react";
import Person from "./component/Person/Person";
import Post from "./component/Post/post";
import PostForm from "./component/Post/porstform";
import Counter from "./basic-components/counter";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
class App extends Component {
  // state ={
  //   Bikes:[
  //     {brand:"Yamaha", model:"R15"},
  //     {brand:"Suzuki", model:"GSX150"},
  //     {brand:"Honda", model:"CBR150"}
  //   ]
  // };
  // modelNameHandler=(newBike)=>{
  //   this.setState({
  //     Bikes:[
  //       {brand:"Yamaha", model:newBike},
  //       {brand:"Suzuki", model:"GSX150"},
  //       {brand:"KTM", model:"RC200"}
  //     ]
  //   })
  // }
  render() {
    return (
      <Provider store={store}>
        <div className="content">
          {/* <button onClick={this.modelNameHandler.bind(this,'R3')}>Change Model</button>
        <Person brand={this.state.Bikes[0].brand} model={this.state.Bikes[0].model} />
        <Person brand={this.state.Bikes[1].brand} model={this.state.Bikes[1].model}> with 16BHP</Person>
        <Person brand={this.state.Bikes[2].brand} model={this.state.Bikes[2].model}/> */}
          {/* <Post/> */}
          {/* <PostForm/> */}
          {<Counter />}
        </div>
      </Provider>
    );
  }
}

export default App;
