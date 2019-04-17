import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [],
      maxNum: 40
    }
  }

  generateNums = () => {
    let randomNum = Math.floor(Math.random() * this.state.maxNum) + 1; 
    this.setState({nums: [ ...this.state.nums, randomNum ]});
  }

  render () {
    console.log(this.state.nums)
    return (
      <div>
        <ul>
          {this.state.nums.map(num => <Ball number={num}/>)}
        </ul>
        <button onClick={this.generateNums}>Generate!!</button>
      </div>
    )
  }
}

export default Lottery; 
