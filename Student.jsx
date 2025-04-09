import React, { Component } from 'react';
import Student1 from './Student1'; // Make sure this component exists

class Student extends Component {
  render() {
    return (
      <>
        <h2>Welcome to Student Component</h2>
        <h3>Remaining Fee: {this.props.fee}</h3>
        <Student1 />
      </>
    );
  }
}

export default Student;
