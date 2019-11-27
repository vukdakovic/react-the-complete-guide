import React from 'react';

const ValidationComponent = (props) => {
  let text = null;
  if (props.textLength <= 5) {
    text = "Text too short"
  } else {
    text = "Text long enough"
  }

  return (
    <p>{text}</p>
  )
}

export default ValidationComponent;
