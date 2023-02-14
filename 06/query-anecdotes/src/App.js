import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from 'react-query'
import { getAll } from './requests'

const App = () => {

  const request = useQuery(
    'anecdotes', getAll, {retry: false})

  if ( request.isLoading ) {
    return <div>loading data...</div>
  }
  if (request.isError) {
    return <span>anecdote service not available due to problems in server</span>

  }

  const handleVote = (anecdote) => {
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
