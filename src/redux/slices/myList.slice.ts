import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../pages/home/interface/movie.interface";

const initialState: IMovie[]= [];

export const myListSlice= createSlice({
    name:'List',
    initialState,
    reducers:{
        addToList: (state, action: PayloadAction<IMovie>)=>{},
        removeToList: (state, action: PayloadAction<IMovie>)=>{}
    }
})

export const { addToList, removeToList} = myListSlice.actions;