
const PersonForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
        name: <input value={props.newPerson}
          onChange={props.handleNameChange}
        />
        <div>
          number: <input value={props.newNumber}
            onChange={props.handleNumberChange}/>
        </div>
        <button type="submit">add</button>
        </form>
    )}
  
    export default PersonForm