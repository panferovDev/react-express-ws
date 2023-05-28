import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './components/pages/AuthPage';
import MainPage from './components/pages/MainPage';
import SignInForm from './components/ui/SignInForm';
import SignUpForm from './components/ui/SignUpForm';
import ProtectedRoute from './components/HOCs/ProtectedRouter';
import { useAppDispatch, useAppSelector } from './features/redux/store';
import { checkUser } from './features/redux/thunkActions/userThunks';
import MainOtlet from './components/HOCs/MainOutlet';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    void dispatch(checkUser());
  }, []);

  return (
    <Container>
      <Routes>
        <Route element={<MainOtlet />}>
          <Route path="/" element={<MainPage />} />
          <Route element={<ProtectedRoute isAllowed={!user.data} />}>
            <Route path="auth" element={<AuthPage />}>
              <Route path="signin" element={<SignInForm />} />
              <Route path="signup" element={<SignUpForm />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
