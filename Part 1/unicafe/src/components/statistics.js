import React from "react";

const Statistics = props => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>Good {props.good}</p>
      <p>Neutral {props.neutral}</p>
      <p>Bad {props.bad}</p>
      <p>All {props.total}</p>
      <p>Average {props.average}</p>
      <p>Positive {props.positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
