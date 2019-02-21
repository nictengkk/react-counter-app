import React, { Component } from "react";
import Counters from "../src/components/Counters/Counters";
import Total from "./components/Total/Total";
import { counters } from "./sampleData";

export class App extends Component {
  state = { counters };

  settingState = (counterId, operator) => {
    const copy = [...this.state.counters];
    copy.find(element => element.id === counterId).value += operator;
    this.setState({ counters: copy });
  };

  handleIncrement = counterId => {
    this.settingState(counterId, 1);
  };

  handleDecrement = counterId => {
    this.settingState(counterId, -1);
  };

  handleDelete = counterId => {
    const filteredData = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    this.setState({ counters: filteredData });
  };

  handleReset = () => {
    const copy = [...this.state.counters];
    const updatedCopy = copy.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: updatedCopy });
    console.log("Reset was pressed!");
  };

  render() {
    const totalCount = counters.reduce((acc, element) => {
      return acc + element.value;
    }, 0);
    return (
      <div>
        <h1>Counter Lab</h1>
        <Counters
          counters={this.state.counters}
          handleDecrement={this.handleDecrement}
          handleDelete={this.handleDelete}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
        />
        <Total counters={this.state.counters.length} totalCount={totalCount} />
      </div>
    );
  }
}

export default App;
