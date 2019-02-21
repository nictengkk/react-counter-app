import React, { Component } from "react";
import { counters } from "./../../sampleData";
import { Counter } from "../Counter/Counter";

export class Counters extends Component {
  state = { counters };

  handleDelete = id => {
    const filteredData = this.state.counters.filter(
      counter => counter.id !== id
    );
    console.log(filteredData);
    this.setState({ counters: filteredData });
  };

  render() {
    const { counters } = this.state;
    return (
      <div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            handleDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
