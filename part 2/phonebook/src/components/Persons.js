import React from "react";

import PersonDetail from "./PersonDetail";

const Persons = props => {
  const { persons, searchName } = props;
  const filteredPerson = persons.filter(
    person =>
      searchName === "" ||
      person.name.toLowerCase().includes(searchName.toLowerCase().trim())
  );

  return <PersonDetail filteredPerson={filteredPerson} />;
};

export default Persons;
