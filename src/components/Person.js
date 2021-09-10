import React, { Component } from "react";
import Book from "./Book";

class Person extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    books: [
      { name: "Rashedul Islam", age: "30" },
      { name: "Rakibul Islam", age: "35" },
    ],
  };

  changeState = (newAge) => {
    this.setState({
      books: [
        { name: "HI, Changed", age: newAge },
        { name: "Hello", age: newAge },
      ],
    });
  };

  changeWithInput = e => {
    this.setState({
      books: [
        { name: e.target.value, age: "30" },
        { name: "Hello", age: "40" },
      ],
    });
  };

  allbooks = this.state.books.map( book => {
    // console.log(book);
    return(
      <Book name={book.name} age={book.age}/>
    )
  });

  render() {
    return (
      <div className="app">
        <input type="text" onChange={this.changeWithInput} />
        { this.allbooks }
      </div>
    );
  }
}

export default Person;
