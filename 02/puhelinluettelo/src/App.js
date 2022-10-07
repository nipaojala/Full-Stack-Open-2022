import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import serverHandling from './components/serverHandling'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const hook = () => {
    serverHandling
    .getAll()
    .then(initialPersons =>{
      setPersons(initialPersons)
    })
  }

  useEffect(hook,[])


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
        serverHandling
        .add(personObject)
        .then(response => {
          setPersons(persons.concat(response))
        })
        setNewPerson('')
        setNewNumber('')
      } else {
        alert(`${newPerson} is already added to phonebook`);
      }
      setNewPerson('')
      setNewNumber('')
  }
  const deletePerson = (event) => {
    const person = persons.find(n => n.name === event.target.value)
    if(window.confirm("Do you want to delete " + person.name)) {
      serverHandling
      .deleteElement(person.id)
      const updatedList = persons.filter(element => element.id !== person.id)
      setPersons(updatedList)
    } else {
      console.log("Person not deleted")
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
      <Persons persons={filtered} deletePerson={(event) => deletePerson(event)}
      />

    </div>
  )

}

export default App