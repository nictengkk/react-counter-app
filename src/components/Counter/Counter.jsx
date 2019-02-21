import React, { Component } from "react";

export class Counter extends Component {
  state = {
    id: this.props.id,
    value: this.props.value
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
        <button className={this.getBadgeClasses()}>{this.state.value}</button>
        <button className="btn btn-success m-1" onClick={this.handleIncrement}>
          +
        </button>
        <button className="btn btn-danger m-1" onClick={this.handleDecrement}>
          -
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => this.props.handleDelete(this.props.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses = () => {
    return this.state.value === 0
      ? "btn btn-warning mr-3 ml-3"
      : "btn btn-primary mr-3 ml-3";
  };
}

export default Counter;
