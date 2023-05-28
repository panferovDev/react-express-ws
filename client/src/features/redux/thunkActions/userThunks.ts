import { createAsyncThunk } from '@reduxjs/toolkit';
import type { SignUpFormType, SignInFormType, UserFromBack } from '../../../types';
import axios from 'axios';

export const signUpUser = createAsyncThunk<UserFromBack, SignUpFormType>(
  'user/signUpUser',
  async (data) => axios.post<UserFromBack>('/api/user/signup', data).then((res) => res.data),
);

export const signInUser = createAsyncThunk<UserFromBack, SignInFormType>(
  'user/signInUser',
  async (data) => axios.post<UserFromBack>('/api/user/signin', data).then((res) => res.data),
);


export const checkUser = createAsyncThunk<UserFromBack>(
  'user/checkUser',
  async () => axios.get<UserFromBack>('/api/user/check').then((res) => res.data),
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async () => axios.get('/api/user/logout')
  .then((res) => null),
);