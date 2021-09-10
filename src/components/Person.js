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
  }

  render() {
    return (
      <div className="app">
        <input type="text" onChange={this.changeWithInput} />
        <Book
          name={this.state.books[0].name}
          age={this.state.books[0].age}
          change={this.changeState.bind(this, "Thirty")}
          inputName={this.changeWithInput}
        />
        <Book
          name={this.state.books[1].name}
          age={this.state.books[1].age}
          change={this.changeState.bind(this, "Fourty")}
        />
      </div>
    );
  }
}

export default Person;
