import axios from 'axios';
import { message } from 'antd';
import actions from './actions';

const getAllProducts = () => (dispatch) => {
  axios.get(`http://194.187.128.3:5000/api/products/`).then((res) => {
    dispatch(actions.setProductsData(res.data));
    dispatch(actions.setProductsLoading(false));
  });
};
const newProduct = (data) => (dispatch) => {
  axios.post(`http://194.187.128.3:5000/api/products/`, data).then((res) => {
    message.success(`${res.status}`, 2);
    dispatch(getAllProducts());
    dispatch(actions.setProductsLoading(false));
  });
};
const updateProduct = (id, data) => (dispatch) => {
  axios.put(`http://194.187.128.3:5000/api/products/${id}`, data).then((res) => {
    message.success(`${res.status}`, 2);
    dispatch(getAllProducts());
    dispatch(actions.setProductsLoading(false));
  });
};

export default {
  getAllProducts,
  newProduct,
  updateProduct,
};
