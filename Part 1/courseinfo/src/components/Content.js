import React from "react";

const Content = props => {
  return (
    <>
      {props.course.parts.map((item, index) => {
        return (
          <p key={index}>
            {item.name} {item.exercises}
          </p>
        );
      })}
    </>
  );
};

export default Content;
