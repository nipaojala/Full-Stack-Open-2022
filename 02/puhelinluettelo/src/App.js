import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newPerson, setNewPerson] = useState('a new person')
  const Note = ({ person }) => {
    return (
      <li>{person}</li>
    )
  }
  const handleInputChange = (event) => {
    setNewPerson(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
      if (!persons.find(element => element.name === newPerson)) {
        const personObject = {
          name: newPerson,
        }
        setPersons(persons.concat(personObject))
        setNewPerson('')
      } else {
        alert(`${newPerson} is already added to phonebook`);
      }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <input value={newPerson}
          onChange={handleInputChange}
        />
        <button type="submit">add</button>
        </form>

      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          < Note key={person.name} person={person.name}/>
        )}
      </ul>
    </div>
  )

}

export default App