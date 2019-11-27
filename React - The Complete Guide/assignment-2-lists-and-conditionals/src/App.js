import React, { Component, useState } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    paragraphText: "This is a paragraph",
  }

  textChange = (event) => {
    this.setState({
      paragraphText: event.target.value
    })
  }

  charComponents = this.state.paragraphText.split('').map(char => {
    return (
      <CharComponent />
    )
  })

  render () {
    return (
      <div className="App">
        Number of characters: <input value={this.state.paragraphText.length}/> <br/><br/>
        Enter the paragraph: <input onChange={this.textChange} value={this.paragraphText}/>
        <p>{this.paragraphText}</p>
        <ValidationComponent textLength={this.numOfChars}/>
        {this.charComponents}
      </div>
    );
  }
}

export default App;
