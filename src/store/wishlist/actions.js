import types from './types';

const setWishlistData = (list) => ({ type: types.SET_WISHLIST_DATA, data: list });
const setWishlistLoading = (isLoading) => ({ type: types.SET_WISHLIST_LOADING, data: isLoading });

export default {
  setWishlistData,
  setWishlistLoading,
};
