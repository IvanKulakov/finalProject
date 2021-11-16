import axios from 'axios';
import actions from './actions';

const getAllCategories = () => (dispatch) => {
  axios.get('http://194.187.128.3:5000/api/catalog').then((res) => {
    if (res && res.data) {
      dispatch(actions.setAllCategories(res.data));
    }
  });
};
const addCategories = (data) => (dispatch) => {
  axios.post('http://194.187.128.3:5000/api/catalog', data).then((res) => {
    if (res && res.data) {
      dispatch(actions.setAllCategories(res.data));
    }
  });
};
const deleteCategories = (data) => (dispatch) => {
  axios.delete(`http://194.187.128.3:5000/api/catalog/${data}`).then((res) => {
    if (res && res.data) {
      dispatch(actions.setAllCategories(res.data));
    }
  });
};

export default {
  getAllCategories,
  addCategories,
  deleteCategories,
};
