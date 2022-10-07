
const Persons = (props) => {
    return (
      <ul>
      {props.persons.map(person =>
        <li key={person.name}>
        {person.name} {person?.number}
        <button onClick={props.deletePerson} value={person.id}>delete</button>
        </li>

      )}
    </ul>
  )
  }

  export default Persons