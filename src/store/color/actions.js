import types from './types';

const setColorData = (colorData) => ({ type: types.SET_COLOR_DATA, data: colorData });
const setColorLoading = (isLoading) => ({ type: types.SET_COLOR_LOADING, data: isLoading });

export default {
  setColorData,
  setColorLoading,
};
