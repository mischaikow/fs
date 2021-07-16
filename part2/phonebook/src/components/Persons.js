import React from 'react'
import Listing from './Listing.js'

const Persons = ({ persons, setPersons, setErrorMessage }) => {
  return (
    <div>
      {persons.map(aPerson => <Listing key={aPerson.id} listing={aPerson} persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage} /> )}
    </div>
  )
}

export default Persons
