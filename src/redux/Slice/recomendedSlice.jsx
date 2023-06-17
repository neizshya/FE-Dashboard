import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const recomendedSlice = createSlice({
    name: 'recomended',
    initialState,
    reducers:{
        addRecomended:(state, action) => {
            return [...state, action.payload]
        },
        updateRecomended:(state, action) => {
            return  state = action.payload
        },
        deleteRecomended: (state, action) => {
            return state.filter((data) => data.recomendedId !== action.payload)
        }
    }
})

export const {addRecomended, updateRecomended, deleteRecomended} = recomendedSlice.actions

export default recomendedSlice.reducer