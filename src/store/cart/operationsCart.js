import axios from 'axios';
import actions from './actionsCart';

const postBigDataCart = (data) => (dispatch) => {
  axios.post(`http://194.187.128.3:5000/api/cart`, data).then((res) => {
    dispatch(actions.setCartData(res.data));
    dispatch(actions.setCartLoading(false));
  });
};
const getCart = () => (dispatch) => {
  axios.get(`http://194.187.128.3:5000/api/cart`).then((res) => {
    dispatch(actions.setCartData(res.data));
    dispatch(actions.setCartLoading(false));
  });
};
const postCart = (data) => (dispatch) => {
  axios.put(`http://194.187.128.3:5000/api/cart/${data}`).then((res) => {
    dispatch(actions.setCartData(res.data));
    dispatch(actions.setCartLoading(false));
  });
};
const deleteCart = (data) => (dispatch) => {
  axios.delete(`http://194.187.128.3:5000/api/cart/${data}`).then((res) => {
    dispatch(actions.setCartData(res.data));
    dispatch(actions.setCartLoading(false));
  });
};
const deleteOneItemCart = (data) => (dispatch) => {
  axios.delete(`http://194.187.128.3:5000/api/cart/product/${data}`).then((res) => {
    dispatch(actions.setCartData(res.data));
    dispatch(actions.setCartLoading(false));
  });
};
const deleteAllCart = () => (dispatch) => {
  axios.delete(`http://194.187.128.3:5000/api/cart`).then(() => {
    dispatch(getCart());
    dispatch(actions.setCartLoading(false));
  });
};

export default {
  getCart,
  postCart,
  deleteCart,
  deleteOneItemCart,
  postBigDataCart,
  deleteAllCart,
};
