import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        { Name: "PHP learning", price: "300tk" },
        { Name: "Javascript Learning", price: "400tk" },
        { Name: "Laravel Learning", price: "500tk" },
      ],
    };
  }

  changeBookName = () => {
    this.setState({
      books: [
        { Name: "PHP learning 1", price: "300tk" },
        { Name: "Javascript Learning 1", price: "400tk" },
        { Name: "Laravel Learning", price: "500tk" },
      ],
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={this.changeBookName}>Change Name</button>
        <h1>
          Name: {this.state.books[0].Name} , Price: {this.state.books[0].price}
        </h1>
        <h1>
          Name: {this.state.books[1].Name} , Price: {this.state.books[1].price}
        </h1>
        <h1>
          Name: {this.state.books[2].Name} , Price: {this.state.books[2].price}
        </h1>
      </div>
    );
  }
}
 
export default Person;

