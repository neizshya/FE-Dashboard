import React from 'react'
import { v4 as uuid } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://localhost:8000/users'

export const getUsers = createAsyncThunk(
    'users/getUsers', async () => {
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

export const addUser = createAsyncThunk('users/addUser',
    async(param) => {
        const response = await axios.post(url, param)

        .then( res => {
            if (res.status !== 200){
                alert('Data Berhasil di Tambah')
                console.error("Error, no fetched data");
                return {}
            } else {
                console.log('response addUsers => ', res.data)
                return res.data;
            }
        })
        .catch(error => {
            console.log('error fetch ', error);
        })

        return response.data


    }
)

export const deleteUser = createAsyncThunk(
    'users/deleteUser', async (id) => {
    const mockApi = `${url}/${id}`
        const res = await axios.delete(
            mockApi
        )

        .then( res => {
            if (res.status !== 200){
                console.error("Error, no fetched data");
                return {}
            } else {
                alert('Data Berhasil di Hapus')
                console.log('response delete => ', res.data)
                return res.data;
            }
        })
        .catch(error => {
            console.log('error fetch ', error);
        })

        return res.data
})

export const editUser = createAsyncThunk(
    'users/editUser', async ([id, data]) => {
        const res = await axios.put(
            `${url}/${id}`, {data}
        )

        .then( res => {
            if (res.status !== 200){
                console.error("Error, no fetched data");
                return {}
            } else {
                console.log('response edit => ', res.data)
                return res.data;
            }
        })
        .catch(error => {
            console.log('error fetch ', error);
        })

        return res.data
})



const initialState = {
    data : [],
    type : '',
}

const usersSlice = createSlice({
    name : 'users',
    initialState : initialState,
    reducers : {},

    extraReducers :  {

        [getUsers.fulfilled] : (state, action) => {
            return{
                ...state,
                data : {
                    data : action.payload
                },
                type : action.type
            }
        },

        [addUser.fulfilled] : ( state, action ) => {
            return {
                ...state,
                type: action.type
            }
        },

        [deleteUser.fulfilled] : (state, action) => {
            return{
                ...state,
                data : state.data.filter((user) =>
                user.id !== action.payload.id,
                ),
                type : action.type
            }
            
        },

        [editUser.fulfilled.type] : (state,action) => {
            return{
                ...state,
                data : state.data.map((product) => {
                    if (product.id === action.payload.id) {
                      product.users = action.payload.users;
                    }
                }),
                type : action.type
            }
        }

    }
})


export default usersSlice.reducer