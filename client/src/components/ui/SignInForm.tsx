import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuthForm from '../hooks/useAuthForm';

export default function SignInForm(): JSX.Element {
  const { submitHandlerSignIn } = useAuthForm();

  return (
    <Form onSubmit={submitHandlerSignIn} className="mt-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
