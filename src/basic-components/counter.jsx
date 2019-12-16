import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      tags: ["tags1", "tags2", "tags3"]
    };
    this.incrementHandler = this.incrementHandler.bind(this);
  }

  renderTAgs() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  incrementHandler(item) {
    console.log(item);
    this.setState({
      count: this.state.count + 1
    });
    console.log("increased", this);
  }
  render() {
    return (
      <div>
        <span className="badge badge-primary">{this.state.count}</span>
        <button
          onClick={() => this.incrementHandler(1)}
          className="btn btn-primary"
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
