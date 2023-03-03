import { configureStore } from '@reduxjs/toolkit'
import toggleSlice from './features/toggleSlice'

export default configureStore({
  reducer: {
    toggle:toggleSlice
  },
})