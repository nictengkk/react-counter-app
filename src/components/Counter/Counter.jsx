import React, { Component } from "react";

export class Counter extends Component {
  state = {
    id: 1,
    value: 0
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className="badge badge-secondary md mr-3 ml-3">
          {this.state.value}
        </span>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          +
        </button>
        <button className="btn btn-danger"> - </button>
      </div>
    );
  }
}

export default Counter;
