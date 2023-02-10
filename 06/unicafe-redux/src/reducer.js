const initialState = {
  good: 0,
  bad: 0,
  ok: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      state.good += 1
      return state
    case 'OK':
      state.ok += 1
      return state
    case 'BAD':
      state.bad += 1
      return state
    case 'RESET':
      state.good = 0
      state.bad = 0
      state.ok = 0
      return state
    default:
      return state
  }
}



export default counterReducer