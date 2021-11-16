import { combineReducers } from 'redux';
import itemsReducer from './items';
import itemReducer from './item';
import colorReducer from './color';
import favoritesReducer from './favorites';
import filtersReducer from './categories&filters';
import cartReducer from './cart/indexCart';
import customerReducer from './user';
import tokenReducer from './token';
import popularReducer from './popular';
import historyReducer from './history';
import commentReducer from './comment';
import slidesReducer from './slides';
import wishlistReducer from './wishlist';
import categoriesReducer from './categories';
import productsReducer from './products';

const reducer = combineReducers({
  items: itemsReducer,
  item: itemReducer,
  color: colorReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
  filters: filtersReducer,
  customer: customerReducer,
  token: tokenReducer,
  popular: popularReducer,
  history: historyReducer,
  comment: commentReducer,
  slides: slidesReducer,
  wishlist: wishlistReducer,
  categories: categoriesReducer,
  products: productsReducer,
});

export default reducer;
