import types from './types';

const setToken = (tokenData) => ({ type: types.SET_TOKEN_DATA, data: tokenData });
const setTokenLoading = (isLoading) => ({ type: types.SET_TOKEN_LOADING, data: isLoading });

export default {
  setToken,
  setTokenLoading,
};
