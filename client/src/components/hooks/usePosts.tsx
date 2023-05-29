import React from 'react';
import axios from 'axios';
import { useAppDispatch } from '../../features/redux/store';
import { addPostThunk, deletePostThunk } from '../../features/redux/thunkActions/postThunk';

type PostForm = {
  title: HTMLInputElement;
  body: HTMLInputElement;
};

export default function usePosts(): {
  submitPostHandler: (e: React.FormEvent<HTMLFormElement & PostForm>) => void;
  handleError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  deleletePostHandler: (id: number) => void;
} {
  const dispatch = useAppDispatch();

  const submitPostHandler = (e: React.FormEvent<HTMLFormElement & PostForm>): void => {
    e.preventDefault();
    if (
      !e.currentTarget.title.value ||
      !e.currentTarget.body.value ||
      !e.currentTarget.file.files[0]
    )
      return;
    const formData = new FormData();
    formData.append('title', e.currentTarget.title.value);
    formData.append('body', e.currentTarget.body.value);
    formData.append('file', e.currentTarget.file.files[0]);
    void dispatch(addPostThunk(formData));
    e.currentTarget.reset();
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = 'http://localhost:3001/img/no-image.png';
  };

  const deleletePostHandler = (id: number): void => {
    dispatch(deletePostThunk(id));
  };

  return { submitPostHandler, handleError, deleletePostHandler };
}
