import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState(" ");
  const [newNumber, setNewNumber] = useState(" ");
  const [searchName, setSearchName] = useState(" ");

  useEffect(() => {
    Axios.get("http://localhost:3001/persons").then(response => {
      console.log(response.data);
      setPersons(response.data);
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
    const duplicatePerson = persons.filter(
      person =>
        person.name.trim().toLowerCase() === personObj.name.trim().toLowerCase()
    );

    if (duplicatePerson.length === 0) {
      setPersons(persons.concat(personObj));
    } else {
      alert(`${newName} is already added to phonebook!!`);
    }

    setNewName(" ");
    setNewNumber(" ");
  };

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

      <Persons persons={persons} searchName={searchName} />

      <div>debug: {searchName}</div>
    </div>
  );
};

export default App;
