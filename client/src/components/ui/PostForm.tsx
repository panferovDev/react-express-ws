import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddPostHook from '../hooks/AddPostHook';

export default function PostForm(): JSX.Element {
  const { submitPostHandler } = AddPostHook();
  return (
    <Form onSubmit={submitPostHandler} className="mt-1">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" placeholder="title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Body</Form.Label>
        <Form.Control type="text" name="body" placeholder="body" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Picture</Form.Label>
        <Form.Control type="file" name="file" placeholder="img" />
      </Form.Group>
      <Button variant="primary" type="submit">
        send
      </Button>
    </Form>
  );
}
