import React from 'react'
import { v4 as uuid } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://localhost:8000/payment_method'

export const getPayment = createAsyncThunk(
    'payment_method', async () => {
    const mockApi = url;
    const fetchData = await axios({
        method : 'GET',
        url : mockApi,
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    .then( res => {
        if (res.status !== 200){
            console.error("Error, no fetched data");
            return {}
        } else {
            console.log('response => ', res.data)
            return res.data;
        }
    })
    .catch(error => {
        console.log('error fetch ', error);
    })
    return fetchData
})


const initialState = {
    data : []
}

const paymentMethodSlice = createSlice({
    name : 'payment_method',
    initialState : initialState,
    reducers : {},

    extraReducers :  {

        [getPayment.fulfilled] : (state, action) => {
            return{
                ...state,
                data : {
                    data : action.payload
                }
            }
        }

    }
})


export default paymentMethodSlice.reducer