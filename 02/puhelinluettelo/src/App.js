import { useState } from 'react'

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

  const Note = ({ person }) => {
    return (
      <li>{person.name} {person.number}</li>
    )
  }
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
      <form onSubmit={handleSearchChange}>
        filter shown with <input value={newSearch}
          onChange={handleSearchChange}
        />
      </form>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        name: <input value={newPerson}
          onChange={handleNameChange}
        />
        <div>
          number: <input value={newNumber}
            onChange={handleNumberChange}/>
        </div>
        <button type="submit">add</button>
        </form>
      <h2>Numbers</h2>
      <ul>
        {filtered.map(person =>
          < Note key={person.name} person={person}/>
        )}
      </ul>
    </div>
  )

}

export default App