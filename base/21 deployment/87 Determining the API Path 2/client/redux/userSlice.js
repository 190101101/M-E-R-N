import {message} from 'antd';
import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: localStorage.getItem('user') ? 
        JSON.parse(localStorage.getItem('user')) : false
    },
    reducers:{}
});

export default userSlice.reducer;
