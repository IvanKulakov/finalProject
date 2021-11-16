import { wishlistOperations } from '../store/wishlist';

export const syncFavoritesAndWishlist = ({ dispatch, wishlist }) => {
  console.log(wishlist);
  if (wishlist === null) {
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    const favoritesID = favorites.map((item) => item._id);
    console.log(favoritesID);
    const wish = {
      products: favoritesID,
    };
    dispatch(wishlistOperations.postWishList(JSON.stringify(wish)));
    console.log(wish);
  }
  // /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
  // const wishID = wishlist.products.map((item) => item._id);
  // const syncData = [...new Set([...wishID, ...favoritesID])];
  // const wish = {
  //   products: favoritesID,
  // };
  // console.log(wish);
  // dispatch(wishlistOperations.deleteWishList(wish));

  // if (favorites.length === 0) {
  //   /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
  //   const wishID = wishlist.products.map((item) => item._id);
  //   console.log(wishID);
  //   dispatch(wishlistOperations.deleteWishList());
  //   dispatch(wishlistOperations.postWishList(JSON.stringify(wishID)));
  // } else {
  //   /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
  //   const wishID = wishlist.products.map((item) => item._id);
  //   /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
  //   const favoritesID = favorites.map((item) => item._id);
  //   console.log(favoritesID);
  //   const syncData = [...new Set([...wishID, ...favoritesID])];
  //   console.log(syncData);
  //   dispatch(wishlistOperations.deleteWishList());
  //   dispatch(wishlistOperations.postWishList(JSON.stringify(syncData)));
  // }
};
