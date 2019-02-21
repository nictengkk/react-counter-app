import React from "react";

function Total(props) {
  const { counters, totalCount } = props;
  return (
    <React.Fragment>
      <div>Total Number of Counters : {counters}</div>
      <div>Total Count : {totalCount}</div>
    </React.Fragment>
  );
}

export default Total;
