import types from './types';

const setFavoritesData = (favoritesData) => ({
  type: types.SET_FAVORITES_DATA,
  data: favoritesData,
});
const setFavoritesLoading = (isLoading) => ({ type: types.SET_FAVORITES_LOADING, data: isLoading });

export default {
  setFavoritesData,
  setFavoritesLoading,
};
