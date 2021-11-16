import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import Loader from '../Loader/Loader';
import 'antd/dist/antd.css';
import './ProductsList.scss';
import { itemsOperations } from '../../store/items';
import Item from '../Item/Item';

const firstPage = 1;
const defaultPerPage = 10;

const ProductsList = (props) => {
  const {
    items: data,
    isLoading,
    getFilteredItems,
    totalItemsCount,
    filterName,
    filterCategory,
    sortPrice,
  } = props;

  useEffect(() => {
    getFilteredItems(firstPage, defaultPerPage, filterName, filterCategory, sortPrice);
  }, [getFilteredItems, filterName, filterCategory, sortPrice]);

  const productsListItems = data.map((item) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    return <Item item={item} key={item._id} />;
  });

  return (
    <div className="productsList--wrapper wrapper">
      <div className="productsList--content">{isLoading ? <Loader /> : productsListItems}</div>
      <Pagination
        defaultCurrent={1}
        total={totalItemsCount}
        responsive
        onChange={(page, perPage) => {
          getFilteredItems(page, perPage, filterName, filterCategory);
        }}
        showSizeChanger={false}
      />
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
    getFilteredItems: (page, perPage, filterName, filterCategory, sortPrice) =>
      dispatch(
        itemsOperations.getFilteredItems(page, perPage, filterName, filterCategory, sortPrice)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
