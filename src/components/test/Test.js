import React, { Component } from "react";

class test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }

  // componentWillMount() {
  //   console.log("componentWillMount");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  // componentWillUpdate() {
  //   console.log("componentWillUpdate");
  // }

  // compoentWillReceviveProps(nextProps, nextState) {
  //   console.log("compoentWillReceviveProps");
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return { test: "sth" };
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log("compoentWillReceviveProps");
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default test;
