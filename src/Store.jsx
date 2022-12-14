import { configureStore} from '@reduxjs/toolkit'
import todoSlice from './todoSlice'

export const Store = configureStore({
    reducer: {
           todo: todoSlice
    },
})