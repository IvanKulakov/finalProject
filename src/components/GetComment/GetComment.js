import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import './GetComment.scss';
import { commentOperations } from '../../store/comment';
import CommentRender from '../CommentRender/CommentRender';

const GetComment = ({ id, dispatch, comment }) => {
  useEffect(() => {
    dispatch(commentOperations.getComment(id));
  }, [dispatch, id]);
  const comments = useMemo(
    () =>
      comment.map((data) => {
        /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
        return (
          <CommentRender name={data.customer.firstName} content={data.content} key={data._id} />
        );
      }),
    [comment]
  );
  return <div className="comments__wrapper wrapper">{comments}</div>;
};
const mapStateToProps = (state) => {
  return {
    comment: state.comment.data,
    isLoading: state.item.isLoading,
  };
};

export default connect(mapStateToProps)(GetComment);
