import React from 'react';
import { Select } from 'antd';

const Color = ({ value }) => {
  const { Option } = Select;
  return <Option value={value}>{value}</Option>;
};

export default Color;
