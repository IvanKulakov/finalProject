import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './CategoriesList.scss';
import { Button } from 'antd';
import { filtersActions, filtersOperations } from '../../store/categories&filters';

const CategoriesList = ({ categories, getAllCategories, setFilterCategory }) => {
  useEffect(() => {
    if (categories.length === 0) {
      getAllCategories();
    }
  }, [getAllCategories, categories.length]);

  const categoriesButtons = categories.map((category) => (
    <Link to="/filter">
      <Button
        className="categories-list__button"
        /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
        key={category._id}
        type="button"
        onClick={() => setFilterCategory(category.id)}
      >
        {category.name}
      </Button>
    </Link>
  ));

  return <div className="categories-list--wrapper wrapper">{categoriesButtons}</div>;
};

const mapStateToProps = (state) => {
  return {
    categories: state.filters.allCategories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories: () => dispatch(filtersOperations.getAllCategories()),
    setFilterCategory: (category) => dispatch(filtersActions.setFilterCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList);
