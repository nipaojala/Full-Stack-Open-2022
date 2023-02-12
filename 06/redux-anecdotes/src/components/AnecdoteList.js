import { useSelector, useDispatch } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { addNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const dispatch = useDispatch()

  const vote = async (anecdote) => {
    dispatch(addVote(anecdote.id))
    dispatch(addNotification("You voted " + anecdote.content))
    setTimeout(() => {
      dispatch(addNotification(''))
    }, 3000)
  }


  return (
    <div>
      {anecdotes.filter(element => element.content.includes(filter)).sort((a, b) => (b.votes - a.votes)).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList