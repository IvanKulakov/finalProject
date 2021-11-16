import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Input, Space, Badge, Popover, Avatar, Button } from 'antd';
import {
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import icon from '../../static/made-by-hands_logo.png';
import './Header.scss';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import { filtersActions } from '../../store/categories&filters';
import PopoverContent from '../PopoverContent/PopoverContent';

const Header = ({ favorites, setFilterName, customer, cart, setFilterCategory }) => {
  const { Search } = Input;
  const counterFavorites = favorites.length;
  const contents = favorites.map((item) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    return <PopoverContent name={item.name} itemNo={item.itemNo} key={item._id} />;
  });
  const [showSearchInput, setShowSearchInput] = useState(false);
  const toggleShowSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const content = <div>{contents}</div>;

  return (
    <div className="wrapper">
      <div className="wrapper header__wrapper">
        <div className="search-icon__block">
          <CategoriesMenu />
          <SearchOutlined className="search__icon" onClick={toggleShowSearchInput} />
        </div>
        <Space className="search__section" direction="vertical">
          <Search
            placeholder="Search"
            allowClear
            onSearch={(value) => setFilterName(value.toUpperCase())}
          />
        </Space>
        <Link to="/main">
          <div>
            <img className="logo__icon" src={icon} alt="logo" />
          </div>
        </Link>
        <div className="header-icon__wrapper">
          <Link to="/filter" className="icon--filter__wrapper">
            <Button
              type="button"
              className="icon--filter"
              onClick={(category) => setFilterCategory(category.id === null)}
            >
              Все товары
            </Button>
          </Link>
          <Link to="/filter" className="header-filter__button">
            <Button
              type="button"
              className="icon--filter"
              onClick={(category) => setFilterCategory(category.id === null)}
            >
              Все товары
            </Button>
          </Link>
          <Link to="/cart">
            <div className="icon--cart">
              <Popover title="Корзина" trigger="hover">
                <Badge count={cart === null ? 0 : cart.products.length}>
                  <ShoppingCartOutlined
                    style={{ fontSize: '25px', height: '25px', color: 'black' }}
                  />
                </Badge>
              </Popover>
            </div>
          </Link>
          <Link to="/favorites">
            <div className="icon--favorites">
              <Popover content={content} title="Избранное" trigger="hover">
                <Badge count={counterFavorites}>
                  <HeartOutlined style={{ fontSize: '25px', height: '25px', color: 'black' }} />
                </Badge>
              </Popover>
            </div>
          </Link>
          <Link to="/login">
            <div className="icon--cart">
              <Popover
                content={customer.firstName ? customer.firstName : 'Гость'}
                title="Привет,"
                trigger="hover"
              >
                <Avatar
                  size="small"
                  style={{ fontSize: '25px', height: '25px', color: 'black' }}
                  icon={
                    <UserOutlined
                      style={
                        customer.firstName
                          ? {
                              color: '#f56a00',
                              backgroundColor: '#fde3cf',
                            }
                          : { backgroundColor: 'none' }
                      }
                    />
                  }
                />
              </Popover>
            </div>
          </Link>
        </div>
      </div>
      {showSearchInput ? (
        <Search
          placeholder="Search"
          allowClear
          onSearch={(value) => setFilterName(value.toUpperCase())}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.data,
    cart: state.cart.data,
    customer: state.customer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setFilterName: (name) => dispatch(filtersActions.setFilterName(name)),
    setFilterCategory: (category) => dispatch(filtersActions.setFilterCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
