import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { filtersActions, filtersOperations } from '../../store/categories&filters';
import './CategoriesMenu.scss';
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

const CategoriesMenu = ({ categories, getAllCategories, setFilterCategory }) => {
  useEffect(() => {
    if (categories.length === 0) {
      getAllCategories();
    }
  }, [getAllCategories, categories.length]);
  const categoriesMenu = categories.map((category) => (
    <Link to="/filter">
      <Menu.Item key={category._id} onClick={() => setFilterCategory(category.id)}>
        {category.name}
      </Menu.Item>
    </Link>
  ));
  const { SubMenu } = Menu;
  return (
    <Menu mode="horizontal">
      <SubMenu key="SubMenu" icon={<MenuUnfoldOutlined />}>
        {categoriesMenu}
      </SubMenu>
    </Menu>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMenu);
