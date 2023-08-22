import { configureStore } from "@reduxjs/toolkit";
import { myListSlice } from "./slices";

export const store = configureStore({
    reducer:{
       listReducer: myListSlice.reducer
    }
})


export type RootState= ReturnType<typeof store.getState>
//tipado de estado global
export type AppDispatch = typeof store.dispatch
//tipado de fn para despechar acciones