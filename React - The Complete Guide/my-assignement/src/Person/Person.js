import React from 'react';

const Person = (props) => {
  return (
    <div>
      <p>
        I'm {props.name}. I am {props.age}. {(props.children == null) ? "Hello" : props.children}
      </p>
    </div>
  );
}

export default Person;
