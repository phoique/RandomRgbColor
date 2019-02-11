import React, { Component } from 'react';
import Color from './Color';

class RgbRandom extends Component {

  constructor(props) {
    super(props);
    this.randomCode = this.randomCode.bind(this);
  }

  randomCode() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256)
    return(`rgb(${r}, ${g}, ${b})`);
  }

  render() {

    let rgbArray = [];
    for (let i = 0; i < 24; i++) {
      let randomFunction = this.randomCode();
      rgbArray.push(randomFunction);
    }
    
    return (
      
      <div>
      {
        <Color rgbColor = {rgbArray}/>
      }
      </div>
    )
  }
}

export default RgbRandom;

