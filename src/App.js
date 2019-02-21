import React, { Component } from "react";
import { Counters } from "../src/components/Counters/Counters";
// import { Counter } from "./components/Counter/Counter";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Counter Lab</h1>
        <Counters />
      </div>
    );
  }
}

export default App;
