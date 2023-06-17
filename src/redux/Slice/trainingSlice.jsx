import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const trainingSlice = createSlice({
    name: 'training',
    initialState,
    reducers:{
        addTraining:(state, action) => {
            return [...state, action.payload]
        },
        updateTraining:(state, action) => {
            return  state = action.payload
        },
        deleteTraining: (state, action) => {
            return state.filter((data) => data.trainingId !== action.payload)
        }
    }
})

export const {addTraining, updatTraining, deleteTraining} = trainingSlice.actions

export default trainingSlice.reducer