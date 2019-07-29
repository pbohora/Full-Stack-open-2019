import React from "react";

const PersonDetail = ({ filteredPerson }) => {
  const display = () =>
    filteredPerson.map(person => (
      <p key={person.name}>
        {person.name} {person.number}
      </p>
    ));

  return <div>{display()}</div>;
};

export default PersonDetail;
