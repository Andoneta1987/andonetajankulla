import React, { Component } from 'react'
import Comment from './Comment'
export default class Comments extends Component {
   constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=10")
      .then(response => response.json())
      .then(data => this.setState({ comments: data }));
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
        <h1>Blog Comments</h1>
        {comments.map(item => (
          <Comment comment={item} key={item.id} />
        ))}
      </div>
    );
  }
}
