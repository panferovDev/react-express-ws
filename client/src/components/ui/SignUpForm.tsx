import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useAuthForm from '../hooks/useAuthForm';

export default function SignUpForm(): JSX.Element {
  const { submitHandlerSignUp } = useAuthForm();

  return (
    <Form onSubmit={submitHandlerSignUp} className="mt-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
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
