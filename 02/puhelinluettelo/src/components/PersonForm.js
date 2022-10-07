const PersonForm = (props) => {
  return (
      <form onSubmit={props.addPerson}>
        <div>
      name: <input value={props.newPerson}
      placeholder = "input a new name"
        onChange={props.handleNameChange}
      />
      </div>
      <div>
        number: <input value={props.newNumber}
        placeholder = "input a new number"
          onChange={props.handleNumberChange}/>
      </div>
      <div>
      <button type="submit">add</button>
      </div>
      </form>
  )}

  export default PersonForm