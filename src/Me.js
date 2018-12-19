import React, { Component } from 'react';

class Me extends Component {
  constructor(props) {
      super(props);
      this.state = {
          message: "",
      };
  }

  componentDidMount() {
    let that = this;
    fetch("https://me-api.jsramverk.me")
    .then(function(response) {
      return response.json();
    })
    .then(function(result) {
        console.log(result)
        that.setState({
            message: result.description
        });
    });
  }

  render() {
    return (
      <main>
        <h1>Me</h1>
        <p>{ this.state.message }</p>
      </main>
    );
  }
}

export default Me;
