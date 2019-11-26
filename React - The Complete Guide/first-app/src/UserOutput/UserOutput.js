import React, { Component } from 'react';

  const userOutput = (props) => {
    const style = {
      backgroundColor: "orange",
      font: "inherit"
    }
    return (
      <div>
        <p style={style}>This is the username: {props.name}</p>
        <p>This is the second paragraph</p>
      </div>
    )

}

export default userOutput;
