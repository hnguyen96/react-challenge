import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

// Define a type for the slice state
export interface AuthState {
  name: string
}

// Define the initial state using that type
const initialState: AuthState = {
  name: ""
}

export const AuthNameSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  }
})

export const { updateName } = AuthNameSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: RootState) => state.auth.name

export default AuthNameSlice.reducer;