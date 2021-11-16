import axios from 'axios';
import { message } from 'antd';
import actions from './actions';

const getSlides = () => (dispatch) => {
  axios.get('http://194.187.128.3:5000/api/slides').then((res) => {
    dispatch(actions.getSlidesData(res.data));
    dispatch(actions.getSlidesLoading(false));
  });
};
const updateSlides = (id, data) => (dispatch) => {
  axios.put(`http://194.187.128.3:5000/api/slides/${id}`, data).then((res) => {
    message.success(`${res.status}`, 2);
    dispatch(getSlides());
    dispatch(actions.getSlidesLoading(false));
  });
};
const addNewSlides = (data) => (dispatch) => {
  axios.post(`http://194.187.128.3:5000/api/slides/`, data).then((res) => {
    message.success(`${res.status}`, 2);
    dispatch(getSlides());
    dispatch(actions.getSlidesLoading(false));
  });
};
const deleteSlides = (data) => (dispatch) => {
  axios.delete(`http://194.187.128.3:5000/api/slides/${data}`).then((res) => {
    message.success(`${res.status}`, 2);
    dispatch(getSlides());
    dispatch(actions.getSlidesLoading(false));
  });
};

export default {
  getSlides,
  updateSlides,
  addNewSlides,
  deleteSlides,
};
