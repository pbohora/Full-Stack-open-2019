import React from "react";

import Statistic from "./statistic";

const Statistics = props => {
  if (props.all === 0) {
    return <div>No feedback given!</div>;
  }

  return (
    <table>
      <tbody>
        <Statistic text="Good" value={props.good} />
        <Statistic text="Neutral" value={props.neutral} />
        <Statistic text="Bad" value={props.bad} />
        <Statistic text="All" value={props.all} />
        <Statistic text="Average" value={props.average} />
        <Statistic text="Positive" value={props.positivePercentage} />
      </tbody>
    </table>
  );
};

export default Statistics;
