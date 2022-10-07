
const Persons = (props) => {
    return (
      <ul>
      {props.persons.map(person =>
        <li key={person.name}>
        {person.name} {person?.number}
        <button onClick={props.deletePerson} value={person.name}>delete</button>
        </li>

      )}
    </ul>
  )
  }

  export default Persons