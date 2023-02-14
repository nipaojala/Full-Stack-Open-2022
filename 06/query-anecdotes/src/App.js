import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getAll, update } from './requests'

const App = () => {
  const queryClient = useQueryClient()

  const newVoteMutation = useMutation(update, {
    onSuccess: () => {
      queryClient.invalidateQueries('anecdotes')
    }
  })
  const request = useQuery(
    'anecdotes', getAll, {retry: false})

  if ( request.isLoading ) {
    return <div>loading data...</div>
  }
  if (request.isError) {
    return <span>anecdote service not available due to problems in server</span>

  }

  const handleVote = (anecdote) => {
    console.log(anecdote)
    const voteCount = anecdote.votes + 1
    newVoteMutation.mutate({...anecdote, votes: voteCount})
    console.log('vote')
  }

const anecdotes = request.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
