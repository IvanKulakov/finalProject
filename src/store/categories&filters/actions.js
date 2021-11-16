import types from './types';

const setFilterName = (name) => ({ type: types.SET_FILTER_NAME, data: name });
const setFilterCategory = (category) => ({ type: types.SET_FILTER_CATEGORY, data: category });
const clearFilters = () => ({ type: types.CLEAR_FILTERS });
const setAllCategories = (categories) => ({ type: types.SET_ALL_CATEGORIES, data: categories });

export default {
  setFilterName,
  setFilterCategory,
  clearFilters,
  setAllCategories,
};
