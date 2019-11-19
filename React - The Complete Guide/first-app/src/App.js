import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <p>This is a paragraph.</p>
        <Person name="Vuk" age="27"/>
        <Person name="Vuki" age="28">This is a message</Person>
        <Person name="Vukoslav" age="26" />
      </div>
    );
    // return React.createElement('div', null, 'h1', 'Naslov')    Ne moze ovako, jer i h1 on cita kao tekst i spaja ih jedan na drugi, tako da mora drugacije
    // return React.createElement('div', null, React.createElement('h1', null, "Naslov sad"))   Ovo ce raditi sad, ali nece se primeniti na njega stil
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Naslov sad"))   Ovako ce se i stil primeniti, ali treba izbegavati ovo jer ce se samo gomilati, treba ono prvo
  }
}

export default App;
