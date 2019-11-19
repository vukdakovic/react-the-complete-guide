import React, { Component } from 'react';

class Person extends Component {
  render() {
    return (
      <div>
        <p>I'm {this.props.name} I'm {this.props.age} years old. {this.props.children}</p>
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
