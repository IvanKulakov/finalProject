import actions from './actions';

const getHistory = () => (dispatch) => {
  try {
    if (!JSON.parse(localStorage.getItem('history'))) {
      localStorage.setItem('history', JSON.stringify([]));
    }
    dispatch(actions.setHistoryData(JSON.parse(localStorage.getItem('history'))));
    dispatch(actions.setHistoryLoading(false));
  } catch (e) {
    console.log(e);
  }
};

export default {
  getHistory,
};
