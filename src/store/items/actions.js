import types from './types';

const setItemsData = (itemsData) => ({ type: types.SET_ITEMS_DATA, data: itemsData });
const setItemsLoading = (isLoading) => ({ type: types.SET_ITEMS_LOADING, data: isLoading });
const setTotalItemsCount = (totalItemsCount) => ({
  type: types.SET_TOTAL_ITEMS_COUNT,
  data: totalItemsCount,
});

export default {
  setItemsData,
  setItemsLoading,
  setTotalItemsCount,
};
