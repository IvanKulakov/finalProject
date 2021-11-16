import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { productsOperations } from '../../store/products';
import ProductsRender from './ProductsRender';
import Loader from '../Loader/Loader';
import AddProduct from './AddProduct';
import { categoriesOperations } from '../../store/categories';
import './adminTools.scss';

const ProductsTool = ({ dispatch, products, isLoading, setAdminTool }) => {
  useEffect(() => {
    dispatch(productsOperations.getAllProducts());
    dispatch(categoriesOperations.getAllCategories());
  }, []);
  if (isLoading) return <Loader />;
  const allProducts = products.map((item) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    return <ProductsRender name={item.name} item={item} key={item._id} />;
  });
  return (
    <div>
      <h2>Список товаров</h2>
      <Button onClick={() => setAdminTool(<AddProduct />)}>Добавить продукт</Button>
      <div className="card-block-render">{allProducts}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products.data,
    isLoading: state.products.isLoading,
  };
};

export default connect(mapStateToProps)(ProductsTool);
