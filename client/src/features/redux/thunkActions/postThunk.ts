import { createAsyncThunk } from "@reduxjs/toolkit";
import type { PostType } from "../../../types/postTypes";
import axios from "axios";

export const fetchPosts = createAsyncThunk<PostType[]>(
    'post/fetchPosts',
    async () => 
     axios<PostType[]>('/api/post')
     .then((res) => res.data)
);

export const addPostThunk = createAsyncThunk<PostType, FormData>(
    'post/addPostThunk',
    async (formData) => 
        axios.post<PostType>('/api/post', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
        .then((res) => res.data)
);

export const deletePostThunk = createAsyncThunk<number, number>(
    'post/deletePostThunk',
    async (postId) =>
        axios.delete(`/api/post/${postId}`)
        .then((res) => postId)
)