import React, { Component, useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = () => {

  const [ usernameState, setUsernameState] = useState({
    usernames: ["First", "Second", "Third"]
  })

  const manipulateUsernameHandler = (event) => {
    setUsernameState ({
      usernames: [event.target.value, "Second", "Third"]
    })
  }

  return (
    <div className="App">
      <UserInput name={usernameState.usernames[0]} changed={manipulateUsernameHandler} />
      <UserOutput name={usernameState.usernames[0]}/>
      <UserOutput name={usernameState.usernames[1]}/>
      <UserOutput name={usernameState.usernames[2]}/>
    </div>
    )
}

export default App;
