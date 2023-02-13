import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const createNotification = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification(state, action) {
      return action.payload
    }
  }
})

export const setNotification = (content, time) => {
  console.log(content)
  return dispatch => {
    dispatch(addNotification(content))
    setTimeout(() => {
      dispatch(addNotification(''))
    }, time*1000)
  }

}

export const { addNotification } = createNotification.actions
export default createNotification.reducer