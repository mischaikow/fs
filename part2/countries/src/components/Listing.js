import React from 'react'

const Listing = ({ listing, countries, setFilterName, setFilteredCountries }) => {
  const countryFocus = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    setFilterName(listing.name)
    setFilteredCountries(
      countries.filter(aCountry => aCountry.name.toLowerCase().includes(listing.name.toLowerCase()))
    );
  }

  return (
    <div>
      {listing.name} <button onClick={countryFocus}>show</button>
    </div>
  )
}

export default Listing
