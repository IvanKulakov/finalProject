import types from './types';

const setItemData = (itemData) => ({ type: types.SET_ITEM_DATA, data: itemData });
const setItemLoading = (isLoading) => ({ type: types.SET_ITEM_LOADING, data: isLoading });

export default {
  setItemData,
  setItemLoading,
};
