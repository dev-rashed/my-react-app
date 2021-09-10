import { render } from '@testing-library/react';
import React from 'react';
import BookCss from '../styles/Book.css';

function Book(props){
    return (
      <div className="Book">
        <h1>
          Name: {props.name} age: {props.age}
        </h1>
        <input type="text" onChange={props.inputName} />
      </div>
    );
}

export default Book;