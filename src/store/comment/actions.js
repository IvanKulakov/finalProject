import types from './types';

const setCommentData = (itemData) => ({ type: types.SET_COMMENT_DATA, data: itemData });
const setCommentLoading = (isLoading) => ({ type: types.SET_COMMENT_LOADING, data: isLoading });

export default {
  setCommentData,
  setCommentLoading,
};
