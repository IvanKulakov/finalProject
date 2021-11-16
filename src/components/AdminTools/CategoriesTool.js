import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import CategoriesRender from './CategoriesRender';
import { categoriesOperations } from '../../store/categories';
import AddCategories from './AddCategories';
import Loader from '../Loader/Loader';
import './adminTools.scss';

const CategoriesTool = ({ categories, setAdminTool, dispatch, isLoading }) => {
  useEffect(() => {
    dispatch(categoriesOperations.getAllCategories());
  }, [dispatch]);
  if (isLoading) return <Loader />;
  const allCategories = categories.map((item) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    return <CategoriesRender id={item.id} name={item.name} key={item._id} />;
  });
  return (
    <div>
      <h2>категории</h2>
      <Button onClick={() => setAdminTool(<AddCategories setAdminTool={setAdminTool} />)}>
        Добавить категорию
      </Button>
      <div className="card-block-render">{allCategories}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
    isLoading: state.categories.isLoading,
  };
};

export default connect(mapStateToProps)(CategoriesTool);
