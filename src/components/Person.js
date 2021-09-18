import React, { Component } from "react";
import Book from "./Book";

class Person extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    books: [
      { id: 1, name: "Rashedul Islam", age: "30" },
      { id: 2, name: "Rakibul Islam", age: "35" },
      { id: 3, name: "Sunwarul Islam", age: "45" },
    ],
    showBooks: true
  };

  deleteBookState = (index) => {
    // const books = this.state.books.map( item => item );
    const books = [...this.state.books];
    books.splice(index, 1);
    this.setState({
      books: books,
    });
  };

  
  toggleBooks = () => {
    this.setState({ showBooks: !this.state.showBooks });
  }
  
  render() {
    
    const allbooks = this.state.books.map((book, index) => {
      return (
        <Book
          name={book.name}
          age={book.age}
          delete={() => this.deleteBookState(index)}
          key={book.id}
        />
      );
    });

    return (
      <div className="app">
        <button onClick={this.toggleBooks}>Toggle Books</button>
        <input type="text" />
        {this.state.showBooks ? allbooks : null}
      </div>
    );
  }
}

export default Person;
