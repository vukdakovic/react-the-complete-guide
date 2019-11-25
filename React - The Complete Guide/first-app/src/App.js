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
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  }

  const [ personsState, setPersonsState ] = useState({
    persons: [
        { name: 'Vuk', age: 20 },
        { name: 'Vuki', age: 28 },
        { name: 'Vukoslav', age: 26 }
      ]
  });

  const [ otherState, setOtherState ] = useState('Some other value');

  const switchNameHandler = (newName) => {
    setPersonsState ({persons: [
        { name: newName, age: 35 },
        { name: 'Vuki', age: 28 },
        { name: 'Vukoslav', age: 26 }
      ]
    })
  }

  const changeNameHandler = (event) => {
    setPersonsState ({persons: [
        { name: "Vuk", age: 35 },
        { name: event.target.value, age: 28 },
        { name: 'Vukoslav', age: 26 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>This is a paragraph.</p>
      <button style={style} onClick={() => switchNameHandler("Vucina")}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person changed={changeNameHandler} name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandler.bind(this, "Vucic")}/>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
    )
}

export default App;
