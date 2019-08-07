import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonDetail from "./components/PersonDetail";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState(" ");
  const [newNumber, setNewNumber] = useState(" ");
  const [searchName, setSearchName] = useState(" ");

  useEffect(() => {
    personService.getAll().then(initialPersons => {
      console.log(initialPersons);
      setPersons(initialPersons);
    });
  }, []);

  const handleNameChange = e => {
    setNewName(e.target.value);
  };

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  };

  const handleSearchChange = e => {
    setSearchName(e.target.value);
  };

  const addName = e => {
    e.preventDefault();
    const personObj = { name: newName, number: newNumber };

    const duplicatePerson = persons.find(
      person =>
        person.name.trim().toLowerCase() === personObj.name.trim().toLowerCase()
    );

    console.log(duplicatePerson);

    const { id } = duplicatePerson;

    console.log(id);

    if (duplicatePerson.length === 0) {
      personService
        .createPerson(personObj)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)));
    } else {
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with the new one?`
      );

      result
        ? personService
            .updatePerson(id, personObj)
            .then(returnedData =>
              setPersons(
                persons.map(person =>
                  person.id !== id ? person : returnedData
                )
              )
            )
        : console.log("");
    }

    setNewName(" ");
    setNewNumber(" ");
  };

  const handleDeletePerson = id => {
    console.log(id);
    const person = persons.find(person => person.id === id);
    const result = window.confirm(`Delete ${person.name}?`);
    console.log(result);

    result
      ? personService.deletePerson(id).then(returnedData => {
          console.log(returnedData);
          setPersons(persons.filter(person => person.id !== id));
        })
      : console.log("");
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
      <h2>Phonebook</h2>

      <Filter searchName={searchName} handleSearchChange={handleSearchChange} />

      <h2>add new contact</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>

      {personDisplay()}
    </div>
  );
};

export default App;
