import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <button className={this.getBadgeClasses()}>{this.props.value}</button>
        <button
          className="btn btn-success m-1"
          onClick={() => this.props.handleIncrement(this.props.id)}
        >
          +
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={() => this.props.handleDecrement(this.props.id)}
        >
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
    return this.props.value === 0
      ? "btn btn-warning mr-3 ml-3"
      : "btn btn-primary mr-3 ml-3";
  };
}

export default Counter;
