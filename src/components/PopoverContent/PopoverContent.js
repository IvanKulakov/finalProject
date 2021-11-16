import React from 'react';
import { connect } from 'react-redux';
import { CloseCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './PopoverContent.css';
import { favoriteDeleteBtnAction } from '../../helpers/index';

const PopoverContent = ({ name, dispatch }) => {
  return (
    <div className="popover-content">
      {name}
      <CloseCircleOutlined onClick={() => favoriteDeleteBtnAction({ name, dispatch })} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    favorites: state.favorites.data,
  };
};

export default connect(mapStateToProps)(PopoverContent);
