import React from "react";

import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
  const courseDisplay = () =>
    courses.map(course => {
      return (
        <div key={course.id}>
          <Header head={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      );
    });
  return <div>{courseDisplay()}</div>;
};

export default Course;
