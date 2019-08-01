import React, { useState, useEffect } from "react";

import Axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountries, setSearchCounties] = useState("");

  useEffect(() => {
    Axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      console.log(response.data);
      setCountries(response.data);
    });
  }, []);

  const handleSearchChange = e => {
    setSearchCounties(e.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchCountries.toLowerCase().trim())
  );

  const buttonClickHandle = e => {
    console.log(e.target.parentNode.firstChild);
    setSearchCounties(e.target.parentNode.firstChild.textContent);
  };

  const dispaly = () =>
    filteredCountries.map(country => (
      <div key={country.numericCode}>
        <p>{country.name}</p>
        <button onClick={buttonClickHandle}>show</button>
      </div>
    ));

  if (filteredCountries.length < 10) {
    if (filteredCountries.length === 1) {
      return (
        <div>
          find countries
          <input value={searchCountries} onChange={handleSearchChange} />
          {filteredCountries.map(country => (
            <div key={country.numericCode}>
              <h1>{country.name}</h1>
              <p>capital: {country.capital}</p>
              <p>population:{country.population}</p>
              <h3>languages:</h3>
              {country.languages.map(language => (
                <li key={language.name}>{language.name}</li>
              ))}

              <img src={country.flag} alt="" />
            </div>
          ))}
          {console.log(filteredCountries)}
        </div>
      );
    } else {
      return (
        <div>
          find countries
          <input value={searchCountries} onChange={handleSearchChange} />
          {dispaly()}
          {console.log(filteredCountries)}
        </div>
      );
    }
  } else {
    return (
      <div>
        find countries
        <input value={searchCountries} onChange={handleSearchChange} />
        <p>too many many matches, specify another filter.</p>
      </div>
    );
  }
};

export default App;
