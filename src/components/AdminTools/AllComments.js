import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { commentOperations } from '../../store/comment';
import CommentsRender from './CommentsRender';
import Loader from '../Loader/Loader';
import './adminTools.scss';

const AllComments = ({ dispatch, comment, isLoading }) => {
  useEffect(() => {
    dispatch(commentOperations.getAllComment());
  }, [dispatch]);
  if (isLoading) return <Loader />;
  const allComments = comment.map((item) => {
    return (
      <CommentsRender
        name={item.product.name}
        comment={item.content}
        customer={item.customer.firstName}
        /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
        id={item._id}
        key={item._id}
      />
    );
  });
  return (
    <div>
      <h2>Список комментариев</h2>
      <div className="card-block-render">{allComments}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    comment: state.comment.data,
    isLoading: state.comment.isLoading,
  };
};

export default connect(mapStateToProps)(AllComments);
