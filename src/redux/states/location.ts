import { Location } from '@/models'
import { createSlice } from '@reduxjs/toolkit'

export const LocationEmptyState: Location = {
  city: ''
}

export const locationSlice = createSlice({
  name: 'location',
  initialState: LocationEmptyState,
  reducers: {
    setLocation: (state, action) => action.payload
  }
})

export const { setLocation } = locationSlice.actions

export default locationSlice.reducer
