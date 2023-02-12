import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { addNotification } from "../reducers/notificationReducer"
import anecdoteService from "../services/anecdotes"
import store from "../store"

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addNewAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    console.log(anecdote)
    dispatch(addAnecdote(anecdote))
    dispatch(addNotification("You added " + event.target.anecdote.value))
    setTimeout(() => {
      dispatch(addNotification(''))
    }, 3000)
    // anecdoteService.create(store.getState().map(element => element.anecdotes.content === event.target.anecdote.value))
    const newAnecdote = store.getState().anecdotes
    anecdoteService.create(newAnecdote.find(element => element.content === event.target.anecdote.value))
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