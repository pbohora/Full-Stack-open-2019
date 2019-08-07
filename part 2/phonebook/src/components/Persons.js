import React from "react";

import PersonDetail from "./PersonDetail";

const Persons = props => {
  const { persons, searchName, handleDeletePerson } = props;

  const filteredPerson = persons.filter(
    person =>
      searchName === "" ||
      person.name.toLowerCase().includes(searchName.toLowerCase().trim())
  );

  const personDisplay = () =>
    filteredPerson.map(person => (
      <PersonDetail
        key={person.id}
        person={person}
        handleDeletePerson={() => handleDeletePerson(person.id)}
      />
    ));
  return (
    <div>
      {personDisplay()}
      {console.log(personDisplay())}
      {console.log(filteredPerson)}
    </div>
  );
};

export default Persons;
