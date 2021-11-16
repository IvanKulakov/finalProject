import axios from 'axios';
import actions from './actions';

const getItems = () => (dispatch) => {
  axios.get('http://194.187.128.3:5000/api/products').then((res) => {
    dispatch(actions.setItemsData(res.data));
    dispatch(actions.setTotalItemsCount(res.data.productsQuantity));
    dispatch(actions.setItemsLoading(false));
  });
};

const getFilteredItems = (page, perPage, nameFilter, categoryFilter, sortPrice) => (dispatch) => {
  dispatch(actions.setItemsLoading(true));
  const nameQuery = nameFilter ? `name=${nameFilter}` : '';
  const categoryQuery = categoryFilter ? `categories=${categoryFilter}` : '';
  const priceQuery = sortPrice ? `sort=${sortPrice}` : '';
  axios
    .get(
      `http://194.187.128.3:5000/api/products/filter?startPage=${page}&perPage=${perPage}&${nameQuery}&${categoryQuery}&${priceQuery}
  `
    )
    .then((res) => {
      dispatch(actions.setItemsData(res.data.products));
      dispatch(actions.setTotalItemsCount(res.data.productsQuantity));
      dispatch(actions.setItemsLoading(false));
    });
};

export default {
  getItems,
  getFilteredItems,
};
