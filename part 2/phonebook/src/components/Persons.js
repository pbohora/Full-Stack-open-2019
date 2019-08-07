import React from "react";

import PersonDetail from "./PersonDetail";
import personService from "../services/persons";

const Persons = props => {
  const { persons, searchName } = props;

  const handleDeletePerson = id => {
    console.log(id);
    const result = window.confirm(`Do you want to delete ${id}`);
    console.log(result);

    result
      ? personService.deletePerson(id).then(returnedData => {
          console.log(returnedData);
        })
      : console.log("kiitos");
  };

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
