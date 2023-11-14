import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie, IRemoveMovie } from "../../pages/home/interface/movie.interface";

interface IAddMovie{
    id: string|number;
    image: string;
    overview: string;
    title: string;
}
const initialState: IAddMovie[]= [];

export const myListSlice= createSlice({
    name:'List',
    initialState,
    reducers:{
        addToList: (state, action: PayloadAction<IAddMovie>)=>{
            const found= state.filter((movie)=> movie.id === action.payload.id)
            if(state.length===0 || found.length===0){
                state.push(action.payload)
            }
            
        },
        removeToList: (state, action: PayloadAction<IRemoveMovie>)=>{}
    }
})

export const { addToList, removeToList} = myListSlice.actions;