import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import type { PostType } from '../../types/postTypes';
import usePosts from '../hooks/usePosts';
import Stack from 'react-bootstrap/Stack';
import { useAppSelector } from '../../features/redux/store';

type Props = {
  post: PostType;
};

function PostCard({ post }: Props) {
  const { handleError, deleletePostHandler } = usePosts();
  const user = useAppSelector((state) => state.user.data);

  return (
    <Col key={post.id} xs={1} md={3}>
      <Card>
        <Card.Img
          variant="top"
          src={`http://localhost:3001/img/${post.pic}`}
          onError={handleError}
        />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
        </Card.Body>
        {user?.id === post.user_id && (
          <Col>
            <Stack className="mb-2" style={{ marginLeft: '5px' }} direction="horizontal" gap={3}>
              <Button onClick={() => deleletePostHandler(post.id)} variant="outline-danger">
                Delete
              </Button>
            </Stack>
          </Col>
        )}
      </Card>
    </Col>
  );
}

export default React.memo(PostCard);
