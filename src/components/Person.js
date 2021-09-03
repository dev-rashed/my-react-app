import React, { Component } from "react";

// let Person = (props) => {
//   return (
//     <div>
//       <h1>Name: {props.name} Age: {props.age} Children: {props.children}</h1>
//     </div>
//   );
// };

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Name: {this.props.name} Age: {this.props.age}</h1>
      </div>
    );
  }
}

export default Person;
