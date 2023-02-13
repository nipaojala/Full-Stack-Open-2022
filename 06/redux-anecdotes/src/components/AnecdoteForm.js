import { useDispatch } from "react-redux"
import {setNotification } from "../reducers/notificationReducer"
import { createAnecdote } from "../reducers/anecdoteReducer"


const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addNewAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    dispatch(createAnecdote(anecdote))
    dispatch(setNotification("You added " + anecdote, 5))
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