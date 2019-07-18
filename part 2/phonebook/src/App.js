import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "04012333" },
    { name: "hari na", number: "04012333" },
    { name: "kaisa lappa", number: "04012333" },
    { name: "reej", number: "04012333" },
    { name: "dillu", number: "04012333" }
  ]);
  const [newName, setNewName] = useState(" ");
  const [newNumber, setNewNumber] = useState(" ");
  const [serachName, setSearchName] = useState(" ");

  const person = () =>
    persons
      .filter(
        person =>
          serachName === "" ||
          person.name.toLowerCase().includes(serachName.trim())
      )
      .map(person => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ));

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

    persons.map(person => {
      if (
        person.name
          .trim()
          .toLowerCase()
          .indexOf(personObj.name.trim().toLowerCase()) === -1
      ) {
        return setPersons(persons.concat(personObj));
      } else {
        setPersons(persons);
        alert(`${newName} is already added to phonebook!!`);
      }
    });

    setNewName(" ");
    setNewNumber(" ");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter with <input value={serachName} onChange={handleSearchChange} />
      </div>
      <h2>add new contact</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {person()}
      <div>debug: {serachName}</div>
    </div>
  );
};

export default App;
