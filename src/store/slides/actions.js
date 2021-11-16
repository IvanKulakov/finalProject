import types from './types';

const getSlidesData = (slidesData) => ({ type: types.GET_SLIDES_DATA, data: slidesData });
const getSlidesLoading = (isLoading) => ({ type: types.GET_SLIDES_LOADING, data: isLoading });

export default {
  getSlidesData,
  getSlidesLoading,
};
