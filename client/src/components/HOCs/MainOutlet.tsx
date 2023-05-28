import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNavBAr from '../ui/AppNavBAr';
import { useAppSelector } from '../../features/redux/store';

type MainOtletPropsType = {
  children?: React.ReactElement;
};

export default function MainOutlet({ children }: MainOtletPropsType): JSX.Element {
  const user = useAppSelector(state => state.user)
  if(user.status === 'fetching'){
    return <h1>Loading...</h1>
  }
    return (
      <>
        <AppNavBAr />
        <Outlet />
      </>
    );
}
