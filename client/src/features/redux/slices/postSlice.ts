import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostType } from '../../../types/postTypes';
import { addPostThunk, deletePostThunk, fetchPosts } from '../thunkActions/postThunk';

type IntitialStateType = {
    data: PostType[],
}

const initialState : IntitialStateType = {
    data: [],
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.data = action.payload;
        });

        builder.addCase(addPostThunk.fulfilled, (state, action) => {
            state.data.push(action.payload);
        });
        builder.addCase(deletePostThunk.fulfilled, (state, action) => {
            const postIndex = state.data.findIndex((post) => post.id === action.payload);
            state.data.splice(postIndex, 1);
        });
    },
});

export default postSlice.reducer;