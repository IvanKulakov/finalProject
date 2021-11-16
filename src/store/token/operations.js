import actions from './actions';

const getToken = () => (dispatch) => {
  try {
    if (!JSON.parse(localStorage.getItem('token'))) {
      localStorage.setItem('token', JSON.stringify(``));
    }
    dispatch(actions.setToken(JSON.parse(localStorage.getItem('token'))));
    dispatch(actions.setTokenLoading(false));
  } catch (e) {
    console.log(e);
  }
};

export default {
  getToken,
};
