import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { favoriteBtnAction } from '../../helpers/index';
import './FavoriteBtn.scss';

const FavoriteBtn = ({ itemData, itemNo, btnText, setBtnText, favorites, dispatch }) => {
  setBtnText(
    favorites.find((item) => item.itemNo === itemNo)
      ? 'Удалить из избранного'
      : 'Добавить в избранное'
  );
  return (
    <div>
      <Button
        className="favorite__button"
        type="primary"
        shape="round"
        icon={<HeartOutlined />}
        onClick={() => favoriteBtnAction({ itemData, itemNo, setBtnText, favorites, dispatch })}
      >
        {btnText}
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.data,
  };
};

export default connect(mapStateToProps)(FavoriteBtn);
