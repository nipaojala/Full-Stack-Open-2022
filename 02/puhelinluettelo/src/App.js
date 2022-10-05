import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter.js'
import Persons from './components/Persons.js'
import PersonForm from './components/PersonForm.js'

const App = () => {
  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }
  const [persons, setPersons] = useState([])
  useEffect(hook, [])
  
  const [newPerson, setNewPerson] = useState('a new person')
  const [newNumber, setNewNumber] = useState('a new number')
  const [newSearch, setNewSearch] = useState('')

  const handleNameChange = (event) => {
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
      if (!persons.find(element => element.name === newPerson)) {
        const personObject = {
          name: newPerson,
          number: newNumber,
        }
        axios
        .post("http://localhost:3001/persons", personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewPerson('')
          setNewNumber('')
        })

      } else {
        alert(`${newPerson} is already added to phonebook`);
      }
  }

    const filtered = !newSearch ? persons : persons.filter((persons) => persons.name.toLowerCase().includes(newSearch.toLowerCase()))
    
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter
        filterBy={newSearch}
        handleSearch={(event) => handleSearchChange(event)}
      />

      <h2>Add a new</h2>
      <PersonForm
        addPerson={(event) => addPerson(event)}
        newPerson={newPerson}
        handleNameChange={(event) => handleNameChange(event)}
        newNumber={newNumber}
        handleNumberChange={(event) => handleNumberChange(event)}
        />
      <h2>Numbers</h2>
      <Persons persons={filtered}
      />

    </div>
  )

}

export default App