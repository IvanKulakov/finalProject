import types from './types';

const setPopularData = (popularData) => ({ type: types.SET_POPULAR_DATA, data: popularData });
const setPopularLoading = (isLoading) => ({ type: types.SET_POPULAR_LOADING, data: isLoading });

export default {
  setPopularData,
  setPopularLoading,
};
