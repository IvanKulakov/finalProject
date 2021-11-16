import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import './MainList.scss';
import { itemsOperations } from '../../store/items';
import Item from '../../components/Item/Item';
import Loader from '../../components/Loader/Loader';

const ProductsList = (props) => {
  const { items: data, isLoading, getFilteredItems, totalItemsCount, filterName } = props;
  useEffect(() => {
    getFilteredItems(1, 10, filterName);
  }, [getFilteredItems, filterName]);

  const productsListItems = data.map((item) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    return <Item item={item} key={item._id} />;
  });

  return (
    <div className="productsList--wrapper">
      <h2 className="productsList--title">Популярные товары</h2>
      <div className="productsList--content">{isLoading ? <Loader /> : productsListItems}</div>
      <Pagination
        defaultCurrent={1}
        total={totalItemsCount}
        responsive
        onChange={(page, perPage) => {
          getFilteredItems(page, perPage, filterName);
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getItems: () => dispatch(itemsOperations.getItems()),
    getFilteredItems: (page, perPage, filterName) =>
      dispatch(itemsOperations.getFilteredItems(page, perPage, filterName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
