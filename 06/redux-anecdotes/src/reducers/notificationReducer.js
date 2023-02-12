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

export const { addNotification } = createNotification.actions
export default createNotification.reducer