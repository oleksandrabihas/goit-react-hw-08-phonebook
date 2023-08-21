import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const setTokenLocal = token => {
  localStorage.setItem('token', token);
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);
      setTokenLocal(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        return thunkAPI.rejectWithValue('Email or password error');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      setAuthHeader(data.token);
      setTokenLocal(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        return thunkAPI.rejectWithValue('Email or password error');
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const persistedToken = localStorage.getItem('token');
  if (persistedToken === null || persistedToken === 'null') {
    return  thunkAPI.rejectWithValue();
  } else {
    try {
      setAuthHeader(persistedToken);
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
}
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const data = await axios.post('users/logout');
    console.log(data)
    clearAuthHeader();
    setTokenLocal(null);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});