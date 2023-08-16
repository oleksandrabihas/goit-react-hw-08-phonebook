import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const register = createAsyncThunk('auth/register',
    async (credentials, thunkAPI) => {
        const res = await axios.post('user/signup', credentials)
        console.log(res)
})