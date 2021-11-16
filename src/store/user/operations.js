import axios from 'axios';
import { message } from 'antd';
import actions from './actions';
import actionsToken from '../token/actions';

const setCustomer = (userData) => (dispatch) => {
  axios.post(`http://194.187.128.3:5000/api/customers`, userData).then((res) => {
    dispatch(actions.setCustomerData(res.data));
    dispatch(actions.setCustomerLoading(false));
  });
};
const setLoginCustomer = (userData) => (dispatch) => {
  axios({
    method: 'post',
    url: `http://194.187.128.3:5000/api/customers/login`,
    headers: { 'Content-Type': 'application/json' },
    data: userData,
  })
    .then((response) => {
      dispatch(actionsToken.setToken(response.data.token));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      message.success('Добро пожаловать!', 2);
    })
    .catch((error) => {
      console.log(error);
      message.error('Что-то пошло не так!', 2);
    });
  dispatch(actions.setCustomerLoading(false));
};

const getCustomer = () => (dispatch) => {
  axios.get(`http://194.187.128.3:5000/api/customers/customer`).then((res) => {
    dispatch(actions.setCustomerData(res.data));
    dispatch(actions.setCustomerLoading(false));
  });
};
const upDateCustomer = (userData) => (dispatch) => {
  axios.put(`http://194.187.128.3:5000/api/customers`, userData).then((res) => {
    dispatch(actions.setCustomerData(res.data));
    dispatch(actions.setCustomerLoading(false));
  });
};
const upDatePassCustomer = (passData) => (dispatch) => {
  axios({
    method: 'put',
    url: `http://194.187.128.3:5000/api/customers/password`,
    headers: { 'Content-Type': 'application/json' },
    data: passData,
  })
    .then((response) => {
      if (response.data.password) message.error(`${response.data.password}`, 2);
      if (response.data.message) {
        message.success(`${response.data.message}`, 2);
      }
    })
    .catch((error) => {
      console.log(error);
      message.error('Что-то пошло не так!', 2);
    });
  dispatch(actions.setCustomerLoading(false));
};

export default {
  getCustomer,
  upDateCustomer,
  upDatePassCustomer,
  setCustomer,
  setLoginCustomer,
};
