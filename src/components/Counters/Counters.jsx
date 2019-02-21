import React, { Component } from "react";
// import { counters } from "./../../sampleData";
import Counter from "../Counter/Counter";

class Counters extends Component {
  //   state = { counters };

  //   settingState = (counterId, operator) => {
  //     const copy = [...this.state.counters];
  //     copy.find(element => element.id === counterId).value += operator;
  //     this.setState({ counters: copy });
  //   };

  //   handleIncrement = counterId => {
  //     this.settingState(counterId, 1);
  //   };

  //   handleDecrement = counterId => {
  //     this.settingState(counterId, -1);
  //   };

  //   handleDelete = counterId => {
  //     const filteredData = this.state.counters.filter(
  //       counter => counter.id !== counterId
  //     );
  //     this.setState({ counters: filteredData });
  //   };

  //   handleReset = () => {
  //     const copy = [...this.state.counters];
  //     const updatedCopy = copy.map(counter => {
  //       counter.value = 0;
  //       return counter;
  //     });
  //     this.setState({ counters: updatedCopy });
  //     console.log("Reset was pressed!");
  //   };

  renderCounters = () => {
    const { counters } = this.props;
    const isEmpty = counters.length === 0;
    return (
      <div>
        {isEmpty && <h1>No More Counters!</h1>}
        {counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
            handleDelete={this.props.handleDelete}
            handleIncrement={this.props.handleIncrement}
            handleDecrement={this.props.handleDecrement}
          />
        ))}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.renderCounters()}
        <button className="btn btn-dark ml-3" onClick={this.props.handleReset}>
          Reset All
        </button>
      </div>
    );
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
