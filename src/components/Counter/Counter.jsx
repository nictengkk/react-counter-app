import React, { Component } from "react";

export class Counter extends Component {
  state = {
    id: 1,
    value: 0
  };

  render() {
    return (
      <div>
        <span className="badge badge-secondary md">{this.state.value}</span>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    );
  }
}

export default Counter;
