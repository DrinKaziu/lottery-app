import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {

  static defaultProps = {
    title: 'Lotto',
    numBalls: 6,
    maxNum: 40
  }

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({length: this.props.numBalls}) //create an array of empty slots so we have something to show
    }
  }

  generateNums = () => { 
    this.setState(curState => ({
      nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }));
  }

  render () {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map((num, idx) => <Ball key={idx} number={num}/>)}
        </div>
        <button onClick={this.generateNums}>Generate!!</button>
      </section>
    )
  }
}

export default Lottery; 
