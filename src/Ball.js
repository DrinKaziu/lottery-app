import React, { Component } from 'react';
import './Ball.css';

class Ball extends Component {
  render () {
    return (
      <li className="Ball">{this.props.number}</li>
    )
  }
}

export default Ball; 
