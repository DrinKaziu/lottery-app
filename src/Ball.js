import React, { Component } from 'react';

class Ball extends Component {
  render () {
    return (
      <li>{this.props.number}</li>
    )
  }
}

export default Ball; 
