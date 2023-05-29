import React from 'react';
import type { SignInFormType, SignUpFormType } from '../../types';
import { useAppDispatch } from '../../features/redux/store';
import { signUpUser, signInUser, logoutUser } from '../../features/redux/thunkActions/userThunks';

export default function useAuthForm() {
  const dispatch = useAppDispatch();

  const submitHandlerSignIn = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignInFormType;
    void dispatch(signInUser(formData));
    e.currentTarget.reset();
  };

  const submitHandlerSignUp = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as SignUpFormType;
    void dispatch(signUpUser(formData));
    e.currentTarget.reset();
  };

  const logoutHandler = (): void => {
    void dispatch(logoutUser());
  };

  return { submitHandlerSignIn, submitHandlerSignUp, logoutHandler };
}
