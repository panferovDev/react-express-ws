import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '../../../types';
import { checkUser, logoutUser, signInUser, signUpUser } from '../thunkActions/userThunks';

const initialState: UserType = {
  status: 'fetching',
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.status = 'idle';
      state.data = action.payload;
    });

    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.status = 'idle';
      state.data = action.payload;
    });

    builder.addCase(signUpUser.rejected, (state) => {
      state.status = 'error';
      state.data = null;
    });

    builder.addCase(checkUser.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
    });

    builder.addCase(checkUser.rejected, (state, action) => {
      state.status = 'idle';
      state.data = null;
  });

    builder.addCase(logoutUser.fulfilled, (state) => {
      state.status = 'idle';
      state.data = null;
    });
  },
});

export default userSlice.reducer;
