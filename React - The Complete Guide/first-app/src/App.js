import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
//   state = {
//     persons: [
//       {name: "Vuk", age: 20},
//       {name: "Vuki", age: 28},
//       {name: "Vukoslav", age: 26}
//     ],
//     otherState: "some other value"
//   }
//
//   switchNameHandler = () => {
//     this.setState({persons: [
//       {name: "Miki", age: 20},
//       {name: "Vuki", age: 28},
//       {name: "Vukoslav", age: 26}
//     ]})
//   }
//
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello</h1>
//         <p>This is a paragraph.</p>
//         <button onClick={this.switchNameHandler}>Switch name</button>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//         <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
//         <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
//       </div>
//     );
//  )
// }

const App = () => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
        { name: 'Vuk', age: 20 },
        { name: 'Vuki', age: 28 },
        { name: 'Vukoslav', age: 26 }
      ]
  });

  const [ otherState, setOtherState ] = useState('Some other value');

  const switchNameHandler = () => {
    setPersonsState ({persons: [
        { name: 'Vuk', age: 35 },
        { name: 'Vuki', age: 28 },
        { name: 'Vukoslav', age: 26 }
      ]
    })
}
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>This is a paragraph.</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
    )
}

export default App;
