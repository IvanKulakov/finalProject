import axios from 'axios';
import actions from './actions';

const getItem = (dataItem) => (dispatch) => {
  axios.get(`http://194.187.128.3:5000/api/products/${dataItem}`).then((res) => {
    dispatch(actions.setItemData(res.data));
    dispatch(actions.setItemLoading(false));
  });
};

export default {
  getItem,
};
