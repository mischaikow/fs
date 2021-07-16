import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList.js'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filterName, setFilterName ] = useState('')
  const [ filteredCountries, setFilteredCountries ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
        setFilteredCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
    setFilteredCountries(
      countries.filter(aCountry => aCountry.name.toLowerCase().includes(event.target.value.toLowerCase()))
    )
  }

  return (
    <div>
      <form>
        Find countries <input value={filterName} onChange={handleFilterChange} />
      </form>
      <CountryList countries={countries}
                   filteredCountries={filteredCountries}
                   setFilteredCountries={setFilteredCountries}
                   setFilterName={setFilterName} />
    </div>
  )
}

export default App;
