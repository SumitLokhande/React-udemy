import React, { Component } from "react";

class post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }));
  }
  render() {
    const postItems = this.state.posts.map(post => (
      <div key={post.id}>
        <h1>Title :{post.title}</h1>
      </div>
    ));
    return (
      <React.Fragment>
        <h1>New Crash Course</h1>
        {postItems}
      </React.Fragment>
    );
  }
}
export default post;
