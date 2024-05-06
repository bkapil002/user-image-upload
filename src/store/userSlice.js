import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData : (state , action) =>{
        state.user = action.payload
        console.log("paloadd",action.payload)
      }
  },
})

export const {setUserData} = userSlice.actions

export default userSlice.reducer