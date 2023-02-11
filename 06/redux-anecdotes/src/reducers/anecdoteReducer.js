import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
      'If it hurts, do it more often',
      'Adding manpower to a late software project makes it later!',
      'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      'Premature optimization is the root of all evil.',
      'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0  
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    addAnecdote(state, action) {
      state.push(asObject(action.payload))
    },
    addVote(state, action) {
      const id = action.payload
      const newState = state.find(element => id === element.id)
      const returnedState = { ...newState, votes: newState.votes + 1}
      return state.map(element =>
        element.id !== id ? element : returnedState 
      )
    }
  }
})

// const anecdoteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADDVOTE':
//       const newState = state.find(element => element.id === action.payload.id)
//       const returnedState = { ...newState, votes: newState.votes + 1}
//       return state.map(element =>
//         element.id !== action.payload.id ? element : returnedState 
//       )
//     case 'ADDANECDOTE':
//       return [...state, asObject(action.payload.value)]
//     default:
//       return state
//   }
// }

// export const addVote = (id) => {
//   return {
//     type: 'ADDVOTE',
//     payload: { id }
//   }
// }

// export const addAnecdote = (value) => {
//   return {
//     type: 'ADDANECDOTE',
//     payload: { value }
//   }
// }

export const { addAnecdote, addVote, filter } = anecdoteSlice.actions
export default anecdoteSlice.reducer