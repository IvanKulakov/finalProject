import axios from 'axios';
import actions from './actions';

const getWishList = () => (dispatch) => {
  axios.get(`/api/wishlist`).then((res) => {
    dispatch(actions.setWishlistData(res.data));
    dispatch(actions.setWishlistLoading(false));
  });
};
const postWishList = (data) => (dispatch) => {
  axios.post(`/api/wishlist`, data).then((res) => {
    dispatch(actions.setWishlistData(res.data));
    dispatch(actions.setWishlistLoading(false));
  });
};
const getAddProductToWishList = (dataId) => (dispatch) => {
  axios.put(`/api/wishlist/${dataId}`).then((res) => {
    dispatch(actions.setWishlistData(res.data));
    dispatch(actions.setWishlistLoading(false));
  });
};
const getDelProductToWishList = (dataId) => (dispatch) => {
  axios.delete(`/api/wishlist/${dataId}`).then((res) => {
    dispatch(actions.setWishlistData(res.data));
    dispatch(actions.setWishlistLoading(false));
  });
};
const deleteWishList = () => (dispatch) => {
  axios.delete(`http://194.187.128.3:5000/api/wishlist`).then((res) => {
    console.log(res.data);
    dispatch(actions.setWishlistLoading(false));
  });
};

export default {
  getWishList,
  postWishList,
  getAddProductToWishList,
  getDelProductToWishList,
  deleteWishList,
};
