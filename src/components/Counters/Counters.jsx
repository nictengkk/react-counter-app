import React, { Component } from "react";
import { counters } from "./../../sampleData";
import { Counter } from "../Counter/Counter";

// counters = [{}.{}.....]

export class Counters extends Component {
  state = { counters };

  render() {
    return (
      <div>
        {counters.map(counter => (
          <Counter key={counter.id} value={counter.value} id={counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;
