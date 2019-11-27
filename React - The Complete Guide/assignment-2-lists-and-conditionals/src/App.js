import React, { Component, useState } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    paragraphText: "hello",
    charArray: []
  }

  textChange = (event) => {
    this.setState({
      paragraphText: event.target.value
    })
  }

  charComponents = this.state.paragraphText.split('').map((char, index, array) => {
    let i = 0;
    array.map(arrayChar => {
      if (char === arrayChar) {
        i++;
        console.log(i);
      }
    })
    if (i === 1) {
      this.setState({
        charArray: this.state.charArray.push(char)
      })
      return (
        <CharComponent letter={char}/>
      )
    }
    // for (var i = 0; i < this.state.charArray.length; i++) {
    //   if (this.state.charArray[i] === char) {
    //     break;
    //   } else {
    //     this.setState({charArray: charArray})
    //   }
    }
  )

  render () {
    return (
      <div className="App">
        Number of characters: <input value={this.state.paragraphText.length}/> <br/><br/>
        Enter the paragraph: <input onChange={this.textChange} value={this.state.paragraphText}/>
        <p>{this.state.paragraphText}</p>
        <ValidationComponent textLength={this.numOfChars}/>
        {this.charComponents}
      </div>
    );
  }
}

export default App;
