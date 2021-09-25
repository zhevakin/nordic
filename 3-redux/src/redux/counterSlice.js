import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    },
    changed: (state, action) => {
      state.value += action.payload
    }
  }
})

console.log(counterSlice)

export const counterSelector = state => state.counter.value
export const { incremented, decremented, changed } = counterSlice.actions
export default counterSlice
