import React, { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("name");

  const personDisplay = () =>
    persons.map(person => <p key={person.name}>{person.name}</p>);

  const handleNameChange = e => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const addName = e => {
    e.preventDefault();
    const personObj = { name: newName };

    persons.map(person => {
      if (person.name.indexOf(personObj.name) === -1) {
        setPersons(persons.concat(personObj));
        console.log(person);
      } else {
        console.log(`${newName} alerady exists!!`);
        const persona = persons.filter(
          (person, index) => persons.indexOf(person) === index
        );
        setPersons(persona);
      }
    });

    console.log(persons);

    setNewName(" ");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personDisplay()}
      <div>debug: {newName}</div>
    </div>
  );
};

export default App;
