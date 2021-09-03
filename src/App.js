import { className } from "postcss-selector-parser";
import { div } from "prelude-ls";
import React from "react";
import Person from "./components/Person";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Person name="Rashed" age="25"/>
      <Person name="Rashul Islam" age="35"/>
    </div>
  );
}

export default App;
