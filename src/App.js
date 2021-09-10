import { className } from "postcss-selector-parser";
import { div } from "prelude-ls";
import React from "react";
import Person from "./components/Person";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Person/>
    </div>
  );
}

export default App;
