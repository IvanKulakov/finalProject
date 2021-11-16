import types from './types';

const setHistoryData = (historyData) => ({
  type: types.SET_HISTORY_DATA,
  data: historyData,
});
const setHistoryLoading = (isLoading) => ({ type: types.SET_HISTORY_LOADING, data: isLoading });

export default {
  setHistoryData,
  setHistoryLoading,
};
