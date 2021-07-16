import React, { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import dbService from './components/BackendComm.js'
import Notification from './components/Notification.js'
import ErrorNote from './components/ErrorNote.js'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ filterName, setFilterName ] = useState('')
  const [ notificationMessage, setNotificationMessage ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')

  useEffect(() => {
    dbService
      .getAll()
      .then(response => {
        setPersons(response.persons)
      })
    setNotificationMessage(null)
    setErrorMessage(null)
  }, [])

  const namesToShow = ''
    ? persons
    : persons.filter(aPerson => aPerson.name.toLowerCase().includes(filterName.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <ErrorNote message={errorMessage} />
      <Filter filterName={filterName} setFilterName={setFilterName} />
      <h2>add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} setNotificationMessage={setNotificationMessage} setErrorMessage={setErrorMessage} />
      <h2>Numbers</h2>
      <Persons persons={namesToShow} setPersons={setPersons} setErrorMessage={setErrorMessage} />
    </div>
  )
}

export default App;
