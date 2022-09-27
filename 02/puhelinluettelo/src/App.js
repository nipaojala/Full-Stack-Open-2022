import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
    number: '0504563043',
    }
  ]) 
  const [newPerson, setNewPerson] = useState('a new person')
  const [newNumber, setNewNumber] = useState('a new number')

  const Note = ({ person }) => {
    console.log(person.name, person.number)
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

  return (
    <div>
      <h1>Phonebook</h1>
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
        {persons.map(person =>
          < Note key={person.name} person={person}/>
        )}
      </ul>
    </div>
  )

}

export default App