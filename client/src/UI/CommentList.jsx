import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from '../redux/actions/CommentsAction';
import CommentOne from './CommentOne';
import './index.css';

export default function CommentList({ id, night }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);
  useEffect(() => {
    dispatch(fetchComments(id));
  }, []);
  console.log(comments);
  return (
    <div>
      <h2 className="comments__heading">Комменты</h2>
      {comments?.map((el) => (
        <>
          <CommentOne night={night} el={el} key={el.id} />
        </>
      ))}
    </div>
  );
}
