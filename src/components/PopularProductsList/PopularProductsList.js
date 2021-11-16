import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import 'antd/dist/antd.css';
import '../ProductsList/ProductsList.scss';
import { itemsOperations } from '../../store/items';
import Item from '../Item/Item';
import { popularSelectors } from '../../store/popular';

const firstPage = 1;
const defaultPerPage = 10;

const ProductsList = (props) => {
  const { isLoading, getFilteredItems, filterName, filterCategory } = props;
  const popular = useSelector(popularSelectors.getPopularItems);
  useEffect(() => {
    getFilteredItems(firstPage, defaultPerPage, filterName, filterCategory);
  }, [getFilteredItems, filterName, filterCategory]);

  const productsListItems = popular.map((item) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    return <Item item={item} key={item._id} />;
  });

  return (
    <div className="productsList--wrapper wrapper">
      <h2 className="productsList__title page__title">Популярные товары</h2>
      <div className="productsList--content">{isLoading ? <Loader /> : productsListItems}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.items.data,
    isLoading: state.items.isLoading,
    totalItemsCount: state.items.totalItemsCount,
    filterName: state.filters.name,
    filterCategory: state.filters.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(itemsOperations.getItems()),
    getFilteredItems: (page, perPage, filterName, filterCategory) =>
      dispatch(itemsOperations.getFilteredItems(page, perPage, filterName, filterCategory)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
