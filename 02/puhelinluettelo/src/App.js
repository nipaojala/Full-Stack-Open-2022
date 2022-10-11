import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import serverHandling from './components/serverHandling'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorMessage2, setErrorMessage2] = useState(null)

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
    const person = persons.find(element => element.name === newPerson)
      if (!person) {
        const personObject = {
          name: newPerson,
          number: newNumber,
        }
        serverHandling
        .add(personObject)
        .then(response => {
          setPersons(persons.concat(response))
          setErrorMessage("Adding " + personObject.name + " was succesful")
        })
        .catch(error => {
          setErrorMessage(
            `Something happened`)
          })
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        setNewPerson('')
        setNewNumber('')
     } else {
        if (window.confirm(`${newPerson} is already added to phonebook, replace the old number with a new one?`)) {
          const personObject = {
            id: person.id,
            name: newPerson,
            number: newNumber,
          }
          serverHandling
            .updatePerson(personObject)
            setErrorMessage("Number was updated for user " + person.name)
        }
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        const updatedList = persons
        updatedList.forEach((element) => {
          if (element.name === person.name) {
            element.number = newNumber
          }
          setPersons(updatedList)

        })
        setNewPerson('')
        setNewNumber('')
      }

  }
  const deletePerson = (event) => {
    let errors = null
    const person = persons.find(n => n.name === event.target.value)
    if(window.confirm("Do you want to delete " + person.name)) {
      serverHandling
      .deleteElement(person.id)
      .catch(error => {
        errors = "some error"
        setErrorMessage2(person.name + " was already removed from server!")
        setErrorMessage(null)
        setTimeout(() => {
          setErrorMessage2(null)
        }, 5000)
      })
      console.log(errors)
      if (!errors) {
        setErrorMessage("Deleted user " + person.name)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
      const updatedList = persons.filter(element => element.id !== person.id)
      setPersons(updatedList)
    } else {
      console.log("Person not deleted")
    }

  }

  const ErrorNotification = ({ message }) => {
    if (message) {
      return (
        <div className="error2">
          {message}
        </div>
      )
    } else {
      return null
    }
  }

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  const filtered = !newSearch ? persons : persons.filter((persons) => persons.name.toLowerCase().includes(newSearch.toLowerCase()))
    
  return (
    <div>
      <h1>Phonebook</h1>
      <ErrorNotification message={errorMessage2} />
      <Notification message={errorMessage} />
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