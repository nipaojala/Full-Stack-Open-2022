import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'
import { createStore } from 'redux'

describe('unicafe reducer', () => {
  

  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const action = {
      type: 'DO_NOTHING'
    }
    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const store = createStore(counterReducer)
    const state = initialState

    deepFreeze(state)
    store.dispatch({type: 'GOOD'})
    console.log(store.getState())
    expect(store.getState()).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })
})