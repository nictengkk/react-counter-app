import React, { Component } from "react";
import { Counter } from "./components/Counter/Counter";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Counter Lab</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
