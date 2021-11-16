import types from './types';

const setProductsData = (itemData) => ({
  type: types.SET_PRODUCTS_DATA,
  data: itemData,
});
const setProductsLoading = (isLoading) => ({
  type: types.SET_PRODUCTS_LOADING,
  data: isLoading,
});

export default {
  setProductsData,
  setProductsLoading,
};
