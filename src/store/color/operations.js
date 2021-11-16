import axios from 'axios';
import actions from './actions';

const getColor = () => (dispatch) => {
  axios.get(`http://194.187.128.3:5000/api/colors`).then((res) => {
    dispatch(actions.setColorData(res.data));
    dispatch(actions.setColorLoading(false));
  });
};

export default {
  getColor,
};
