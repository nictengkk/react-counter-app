import React from "react";

function Total(props) {
  const { counters, totalCount } = props;
  return (
    <React.Fragment>
      <div className="ml-3">Total Number of Counters : {counters}</div>
      <div className="ml-3">Total Count : {totalCount}</div>
    </React.Fragment>
  );
}

export default Total;
