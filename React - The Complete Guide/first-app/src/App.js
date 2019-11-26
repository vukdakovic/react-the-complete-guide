import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

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
        { name: 'Vuk', age: 20, id: 1 },
        { name: 'Vuki', age: 28, id: 2 },
        { name: 'Vukoslav', age: 26, id: 3 }
      ]
  });

  const [ otherState, setOtherState ] = useState('Some other value');

  const [ showPersonsState, setShowPersonsState ] = useState(false);

  const [ usernameState, setUsernameState] = useState({
    usernames: ["First", "Second", "Third"]
  })

  const switchNameHandler = (newName) => {
    setPersonsState ({persons: [
        { name: newName, age: 35, id: 1 },
        { name: 'Vuki', age: 28, id: 2 },
        { name: 'Vukoslav', age: 26, id: 3 }
      ]
    })
  }

  const deletePersonHandler = (index) => {
    // const newPersons = personsState.persons.slice();
    const newPersons = [...personsState.persons];
    newPersons.splice(index, 1);
    setPersonsState({persons: newPersons})
  }

  const manipulateUsernameHandler = (event) => {
    setUsernameState ({
      usernames: [event.target.value, "Second", "Third"]
    })
  }

  const togglePersonsHandler = () => {
    const doesShow = showPersonsState;
    setShowPersonsState (!doesShow)
  }

  let persons = null;

  if (showPersonsState) {
    persons = (
      <div>
        {
          personsState.persons.map((person, index) => {
            return (
              <Person click={() => {deletePersonHandler(index)}} name={person.name} age={person.age} key={person.id} />
          )})
        }
      </div>
    )
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>This is a paragraph.</p>
      <button style={style} onClick={() => switchNameHandler("Vucina")}>Switch name</button>
      <button onClick={togglePersonsHandler}>Show Persons</button>
      {persons}
      <UserInput name={usernameState.usernames[0]} changed={manipulateUsernameHandler} />
      <UserOutput name={usernameState.usernames[0]}/>
      <UserOutput name={usernameState.usernames[1]}/>
      <UserOutput name={usernameState.usernames[2]}/>
    </div>
    )
}

export default App;
