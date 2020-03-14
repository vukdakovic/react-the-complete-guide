import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'

// class App extends Component {
//   state = {
//     persons: [
//       { name: "Vuk", age: Math.floor(Math.random() * 100)},
//       { name: "Vuki", age: Math.floor(Math.random() * 100)},
//       { name: "Vukili", age: Math.floor(Math.random() * 100)}
//     ]
//     otherState: "Some value"
//   }
//   switchNameHandler = () => {
//     // console.log("Hello");
//     this.setState({
//       persons: [
//         { name: "Vuk2", age: Math.floor(Math.random() * 100)},
//         { name: "Vuki2", age: Math.floor(Math.random() * 100)},
//         { name: "Vukili2", age: Math.floor(Math.random() * 100)}
//       ]
//     })
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World</h1>
//               <p>This is working</p>
//               <button onClick={this.switchNameHandler}>Switch Name</button>
//               <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
//               <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
//               <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
//       </div>
//     );
//   }
// }

function App() {
  useState(
    {
      persons: [
        { name: "Vuk", age: Math.floor(Math.random() * 100)},
        { name: "Vuki", age: Math.floor(Math.random() * 100)},
        { name: "Vukili", age: Math.floor(Math.random() * 100)}
      ]
        otherState: "Some value"
      }
  )
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>This is working</p>
      <button>Switch Name</button>
      <Person name="Vuk" age={Math.floor(Math.random() * 100)}/>
      <Person name="Vuk" age={Math.floor(Math.random() * 100)}>My hobbies: Racing</Person>
      <Person name="Vuk" age={Math.floor(Math.random() * 100)}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "hello"))
}

export default App;
