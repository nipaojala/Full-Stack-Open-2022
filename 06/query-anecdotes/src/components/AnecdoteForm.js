import { useMutation, useQueryClient } from "react-query"
import { create } from "../requests"
import { useCounterDispatch } from "../CounterContext"

const AnecdoteForm = () => {
  const dispatch = useCounterDispatch()
  const queryClient = useQueryClient()

  const onCreate = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({content, votes: 0})
    dispatch({payload: 'You added anecdote: ' + content})
    setTimeout(() => {
      dispatch({payload: ''})
    }, 5000)
  }

const newAnecdoteMutation = useMutation(create, {
  onSuccess: (newAnecdote) => {
    const anecdotes = queryClient.getQueryData('anecdotes')
    queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
  }
})

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
