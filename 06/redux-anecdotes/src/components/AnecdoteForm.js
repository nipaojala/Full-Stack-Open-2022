import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addNewAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log(anecdote)
    dispatch(addAnecdote(anecdote))
    event.target.anecdote.value = ''
  }
  return (
    <div>
      <h2>create new</h2>
          <form onSubmit={addNewAnecdote}>
            <input name='anecdote'/>
            <button type='submit'>create</button>
          </form>
    </div>
  )
}
export default AnecdoteForm