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

  renderCounters = () => {
    const { counters } = this.state;
    const isEmpty = counters.length === 0;
    return (
      <div>
        {isEmpty && <h1>No More Counters!</h1>}
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
  };

  render() {
    return this.renderCounters();
  }
}

export default Counters;

// Tenary operators for condition
// renderCounterss = () => {
//     const { counters } = this.state;
//     return this.state.counters.length === 0 ? (
//         <h1>No More Counters</h1>
//     ) : (
//             <div>
//                 {counters.map(counter => (
//                     <Counter
//                         key={counter.id}
//                         value={counter.value}
//                         id={counter.id}
//                         handleDelete={this.handleDelete}
//                     />
//                 ))}
//             </div>
//         );
// };
