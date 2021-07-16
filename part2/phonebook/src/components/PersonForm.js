import React, { useState } from 'react'
import dbService from './BackendComm.js'

const PersonForm = ({ persons, setPersons, setNotificationMessage, setErrorMessage }) => {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    
    const temp = persons.filter(x => x.name === newName)

    if (temp.length > 0) {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
        const nameObject = {
          name: newName,
          number: newNumber,
          id: temp[0].id 
        }
        dbService
          .update(nameObject.id, nameObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== nameObject.id ? person : nameObject))
            return response.name
          })
          .then(response => {
            setNotificationMessage(`${response} had their number changed in phonebook.`)
            setTimeout(() => {
              setNotificationMessage(null)
            }, 3000)
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${nameObject.name} has already been removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
            setPersons(persons.filter(n => n.id !== nameObject.id))
          })
      }
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }

      dbService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat({ name: response.name,
                                      number: response.number,
                                      id: response.id }))
          return response.name
        })
        .then(response => {
          setNotificationMessage(`${response} added to phonebook.`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 3000)
        })
    }
  }

  return (
    <form onSubmit={addName}>
      <div>name: <input value={newName} onChange={handleNameChange}/></div>
      <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
      <div><button type="submit">add</button></div>
    </form>
  )
}

export default PersonForm
