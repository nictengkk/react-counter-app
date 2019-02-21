import React, { Component } from "react";

export class Counter extends Component {
  state = {
    id: 1,
    value: 0
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.value}</span>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          +
        </button>
        <button className="btn btn-danger" onClick={this.handleDecrement}>
          -
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    return this.state.value === 0
      ? "badge badge-warning md mr-3 ml-3"
      : "badge badge-primary md mr-3 ml-3";
  };
}

export default Counter;
