import axios from 'axios';
import { message } from 'antd';
import actions from './actions';

const getComment = (data) => (dispatch) => {
  axios.get(`http://194.187.128.3:5000/api/comments/product/${data}`).then((res) => {
    dispatch(actions.setCommentData(res.data));
    dispatch(actions.setCommentLoading(false));
  });
};
const postComment = (commentItem) => (dispatch) => {
  axios.post(`http://194.187.128.3:5000/api/comments`, commentItem).then((res) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    const link = res.data.product._id;
    dispatch(getComment(link));
    dispatch(actions.setCommentLoading(false));
  });
};
const getAllComment = () => (dispatch) => {
  axios.get(`http://194.187.128.3:5000/api/comments/`).then((res) => {
    dispatch(actions.setCommentData(res.data));
    dispatch(actions.setCommentLoading(false));
  });
};
const deleteComment = (data) => (dispatch) => {
  axios.delete(`http://194.187.128.3:5000/api/comments/${data}`).then((res) => {
    message.success(`${res.data.message}`, 2);
    dispatch(getAllComment());
    dispatch(actions.setCommentLoading(false));
  });
};
const updateComment = (id, data) => (dispatch) => {
  axios.put(`http://194.187.128.3:5000/api/comments/${id}`, data).then(() => {
    dispatch(getAllComment());
    dispatch(actions.setCommentLoading(false));
  });
};

export default {
  postComment,
  getComment,
  getAllComment,
  deleteComment,
  updateComment,
};
