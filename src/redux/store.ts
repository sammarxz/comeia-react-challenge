import { configureStore } from '@reduxjs/toolkit'

import { locationSlice } from './states/location'

export interface AppStore {
  location: any
}

export default configureStore<AppStore>({
  reducer: {
    location: locationSlice.reducer
  }
})
