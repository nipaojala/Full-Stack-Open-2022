import { useState } from 'react'
import Filter from './components/Filter.js'
import Persons from './components/Persons.js'
import PersonForm from './components/PersonForm.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
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
    event.preventDefault()
    setNewSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
      if (!persons.find(element => element.name === newPerson)) {
        const personObject = {
          name: newPerson,
          number: newNumber,
        }
        setPersons(persons.concat(personObject))
        setNewPerson('')
        setNewNumber('')
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
        addPerson={addPerson}
        newPerson={newPerson}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <Persons persons={filtered}
      />

    </div>
  )

}

export default App