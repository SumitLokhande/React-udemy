import React, { Component } from "react";

class porstform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(e) {
    // console.log(e,"e")/
    // console.log(e.target,"target")
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmitHandler(e) {
    e.preventDefault();
    console.log("Submit form");
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <React.Fragment>
        <h1>Add Post Form</h1>
        <form onSubmit={this.onSubmitHandler}>
          <div>
            <label>Title</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChangeHandler}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body</label>
            <br />
            <textarea
              type="text"
              name="body"
              onChange={this.onChangeHandler}
              value={this.state.body}
            />
          </div>
          <br />

          <button type="submit">Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
export default porstform;
