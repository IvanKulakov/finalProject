import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import '../../components/ProductsList/ProductsList.scss';
import { Empty } from 'antd';
import Item from '../../components/Item/Item';

const FavoritesList = ({ favorites }) => {
  const favoritesList = favorites.map((item) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    return <Item item={item} key={item._id} />;
  });

  return (
    <div className="productsList--wrapper wrapper">
      <h2 className="productsList--title page__title">Избранные товары</h2>
      <div className="favoritesList__content">
        {favorites.length === 0 ? (
          <div className="favoriteslist--empty">
            <Empty />
            <h3 className="empty__title">Нет избранных</h3>
            <h4 className="empty__subtitle">Но это никогда не поздно исправить &#128515;</h4>
          </div>
        ) : (
          favoritesList
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.data,
  };
};

export default connect(mapStateToProps)(FavoritesList);
