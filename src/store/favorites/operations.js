import actions from './actions';

const getFavorites = () => (dispatch) => {
  try {
    if (!JSON.parse(localStorage.getItem('favorites'))) {
      localStorage.setItem('favorites', JSON.stringify([]));
    }
    dispatch(actions.setFavoritesData(JSON.parse(localStorage.getItem('favorites'))));
    dispatch(actions.setFavoritesLoading(false));
  } catch (e) {
    console.log(e);
  }
};

export default {
  getFavorites,
};
