import { render } from '@testing-library/react';
import React from 'react';

function Book(props){
    return (
      <div>
        <h1 onClick={props.change}>
          Name: {props.name} age: {props.age}
        </h1>
        <input type="text" onChange={props.inputName} />
      </div>
    );
}

export default Book;