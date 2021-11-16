import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import { colorOperations } from '../../store/color';
import 'antd/dist/antd.css';
import Loader from '../Loader/Loader';
import Color from '../Color/Color';

const ColorBtn = ({ color, isLoading, dispatch, setColorSelect }) => {
  useEffect(() => {
    dispatch(colorOperations.getColor());
  }, []);
  if (isLoading) return <Loader />;
  const handleChange = (value) => {
    setColorSelect(value);
    console.log(`selected ${value}`);
  };
  const colors = color.map((item) => {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
    return <Color value={item.name} key={item._id} />;
  });

  return (
    <div>
      <Select defaultValue="red" style={{ width: 120 }} onChange={handleChange}>
        {colors}
      </Select>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    color: state.color.data,
    isLoading: state.color.isLoading,
  };
};

export default connect(mapStateToProps)(ColorBtn);
