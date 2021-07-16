import React from 'react'
import dbService from './BackendComm.js'

const Listing = ({ listing, persons, setPersons, setErrorMessage }) => {
  const deleteName = (event) => {
    event.preventDefault()
    const toDel = window.confirm(`Delete ${listing.name}?`)
    if (toDel) {
      dbService
        .drop(listing.id)
        .then(setPersons(persons.filter(n => n.id !== listing.id)))
        .catch(error => {
          setErrorMessage(
            `Information of ${listing.name} has already been removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }
  }

  return (
    <p>
      {listing.name} {listing.number}
      <button onClick={deleteName}>delete</button>
    </p>
  )
}

export default Listing
