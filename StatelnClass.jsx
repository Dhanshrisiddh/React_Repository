import React, { Component } from 'react';

class StateInClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Dhanshri',
    };
  }

  changeName = () => {
    this.setState({ name: 'Dhanshri Siddh' });
  };

  render() {
    return (
      <>
        <h2>React using state in class component</h2>
        <h3>Name Value using state: {this.state.name}</h3>
        <button onClick={this.changeName}>Change Name</button>
      </>
    );
  }
}

export default StateInClass;
