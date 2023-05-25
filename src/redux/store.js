import { configureStore } from "@reduxjs/toolkit";
import langSlice from './redusers/login'
export const store = configureStore({
    reducer: {
        lang: langSlice
    }
})