import React from "react";

const Total = props => {
  const [a, b, c] = props.course.parts;
  console.log(a);
  const total = a.exercises + b.exercises + c.exercises;
  return <p>Number of exercises {total};</p>;
};

export default Total;
