import React, { Component } from 'react';
import "./Person.css"

class Person extends Component {
  render() {
    return (
      <div className="Person">
        <p onClick={this.props.click}>I'm {this.props.name} I'm {this.props.age} years old. {this.props.children}</p>
        <input onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }
}

export default Person;

// const person = (cucks) => {
//   return <p>I'm {cucks.name} I'm {cucks.age} years old. </p>
// }
//
// export default person;
