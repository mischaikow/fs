import React from 'react'
import Listing from './Listing.js'
import Highlight from './Highlight.js'

const CountryList = ({ countries, filteredCountries, setFilteredCountries, setFilterName }) => {
  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (filteredCountries.length > 1) {
    return (
      <>
        {filteredCountries.map(aCountry => <Listing key={aCountry.alpha3Code}
                                                    listing={aCountry}
                                                    setFilterName={setFilterName}
                                                    setFilteredCountries={setFilteredCountries}
                                                    countries={countries} />)}
      </>
    )
  } else if (filteredCountries.length === 1) {
    return (
      <div>
        <Highlight country={filteredCountries[0]} />
      </div>
    )
  } else {
    return <p>No matches, specify another filter</p>
  }
}

export default CountryList;
