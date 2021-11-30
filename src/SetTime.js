import React from 'react';

class SetTime extends React.Component {
  state = { time: '' };

  componentDidMount() {
    setInterval(() => {
      this.setState = { time: new Date().toLocaleTimeString() };
    }, 1000);
  }

  render() {
    return <div>The time is: {this.state.time}</div>;
  }
}

export default SetTime;

//we need to update the Clock state so it updates once per second
//I need to initialize state.
// what is the value of what I need to display? It is a string so the state should be set to an empty string
//need to use setSet to update the state. the state will be an object that updates the time property: time
