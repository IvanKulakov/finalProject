import types from './types';

const setCategoriesData = (itemData) => ({
  type: types.SET_CATEGORIES_DATA,
  data: itemData,
});
const setCategoriesLoading = (isLoading) => ({
  type: types.SET_CATEGORIES_LOADING,
  data: isLoading,
});

export default {
  setCategoriesData,
  setCategoriesLoading,
};
