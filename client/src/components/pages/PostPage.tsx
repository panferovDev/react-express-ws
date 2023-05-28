import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostForm from '../ui/PostForm';
import { useAppDispatch, useAppSelector } from '../../features/redux/store';
import PostCard from '../ui/PostCard';
import { fetchPosts } from '../../features/redux/thunkActions/postThunk';

export default function PostPage(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <>
      {user.data && (
        <Row>
          <Col>
            <PostForm />
          </Col>
        </Row>
      )}
      <Row className='mt-3'>
        {posts.data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </Row>
    </>
  );
}
