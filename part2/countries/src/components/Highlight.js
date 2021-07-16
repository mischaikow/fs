import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Bullets from './Bullets.js'
import WeatherReport from './WeatherReport.js'

const Highlight = ({ country }) => {
  const [ weather, setWeather ] = useState([])

  useEffect(() => {
    let weatherChannel = 'http://api.weatherstack.com/current?access_key='
                         + process.env.REACT_APP_API_KEY
                         + '&query='
                         + country.capital
    axios
      .get(weatherChannel)
      .then(response => setWeather(response.data))
  }, [country.capital]);

  let altText = 'The ' + country.demonym + ' flag.';

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>Spoken languages</h3>
      <ul>
        {country.languages.map(aLang => <Bullets key={aLang.iso639_2} point={aLang.name} />)}
      </ul>
      <img src={country.flag} alt={altText} height="250" />
      <h3>Weather in {country.capital}</h3>
      <WeatherReport weather={weather} />
    </div>
  )
}

export default Highlight
