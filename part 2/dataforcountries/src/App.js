import React, { useState, useEffect } from 'react'

import Axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountries, setSearchCounties] = useState('')
  const [weather, setWeather] = useState('')

  useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      //console.log(response.data)
      setCountries(response.data)
    })
  }, [])

  const handleSearchChange = e => {
    setSearchCounties(e.target.value)
  }

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchCountries.toLowerCase().trim())
  )
  console.log('filter', filteredCountries)

  useEffect(() => {
    const filter = filteredCountries[0]

    if (filteredCountries.length === 1) {
      console.log('dfggd', filter.capital)
      Axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${filteredCountries[0].capital}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      ).then(response => {
        console.log('ereer', response.data)
        setWeather(response.data)
      })
    }
  }, [filteredCountries[0]])

  const buttonClickHandle = id => {
    console.log(id)
    setSearchCounties(id)
  }

  const dispaly = () =>
    filteredCountries.map(country => (
      <div key={country.numericCode}>
        <p>
          {country.name}{' '}
          <button onClick={() => buttonClickHandle(country.name)}>show</button>
        </p>
      </div>
    ))

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
              <img
                style={{ height: '100px', width: '100px' }}
                src={country.flag}
                alt=''
              />
              <h3>Weather in {country.capital}</h3>
              {weather.main && (
                <p>
                  <strong>temperature:</strong>
                  {weather.main.temp} celcius
                </p>
              )}
              {weather.wind && (
                <p>
                  <strong>wind:</strong>
                  {weather.wind.speed}
                </p>
              )}
            </div>
          ))}
          {console.log(filteredCountries)}
        </div>
      )
    } else {
      return (
        <div>
          find countries
          <input value={searchCountries} onChange={handleSearchChange} />
          {dispaly()}
          {console.log(filteredCountries)}
        </div>
      )
    }
  } else {
    return (
      <div>
        find countries
        <input value={searchCountries} onChange={handleSearchChange} />
        <p>too many many matches, specify another filter.</p>
      </div>
    )
  }
}

export default App
