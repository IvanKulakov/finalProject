import axios from 'axios';
import { message } from 'antd';
import actions from './actions';
import { filtersOperations } from '../categories&filters';

const getAllCategories = () => (dispatch) => {
  axios.get(`http://194.187.128.3:5000/api/catalog/`).then((res) => {
    dispatch(actions.setCategoriesData(res.data));
    dispatch(actions.setCategoriesLoading(false));
  });
};
const addCategories = (data) => (dispatch) => {
  axios.post(`http://194.187.128.3:5000/api/catalog/`, data).then((res) => {
    message.success(`${res.status}`, 2);
    dispatch(getAllCategories());
    dispatch(filtersOperations.getAllCategories());
    dispatch(actions.setCategoriesLoading(false));
  });
};
const deleteCategories = (data) => (dispatch) => {
  axios.delete(`http://194.187.128.3:5000/api/catalog/${data}`).then((res) => {
    message.success(`${res.data.message}`, 2);
    dispatch(getAllCategories());
    dispatch(filtersOperations.getAllCategories());
    dispatch(actions.setCategoriesLoading(false));
  });
};
const updateCategories = (id, data) => (dispatch) => {
  axios.put(`http://194.187.128.3:5000/api/catalog/${id}`, data).then((res) => {
    message.success(`${res.status}`, 2);
    dispatch(getAllCategories());
    dispatch(filtersOperations.getAllCategories());
    dispatch(actions.setCategoriesLoading(false));
  });
};

export default {
  getAllCategories,
  addCategories,
  deleteCategories,
  updateCategories,
};
