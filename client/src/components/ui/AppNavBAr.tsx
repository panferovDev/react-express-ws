import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../features/redux/store';
import AuthHook from '../hooks/useAuthForm';

export default function AppNavBAr(): JSX.Element {
  const user = useAppSelector((state) => state.user.data);
  const { logoutHandler } = AuthHook();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto flex-grow-1">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <span className="navbar-text nav-link" style={{ color: 'red' }}>
            ws status
          </span>
          {!user ? (
            <>
              <NavLink to="/auth/signin" className="nav-link">
                Sign In
              </NavLink>
              <NavLink to="/auth/signup" className="nav-link">
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              <span className="navbar-text nav-link" style={{ color: 'yellow' }}>
                Привет, {user.name}
              </span>
              <Button onClick={logoutHandler} variant="outline-warning">
                logout
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
