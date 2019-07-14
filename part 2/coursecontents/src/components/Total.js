import React from "react";

const Total = ({ parts }) => {
  const total = parts.reduce((sum, order) => {
    console.log(sum, order.exercises);
    return sum + order.exercises;
  }, 0);
  return (
    <div>
      <strong>total of {total} exercises</strong>{" "}
    </div>
  );
};

export default Total;
