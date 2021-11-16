import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import { categoriesOperations } from '../../store/categories';
import AllComments from './AllComments';

const AddCategories = ({ dispatch, setAdminTool }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const addNewCat = () => {
    const newCategory = {
      id: id,
      name: name,
      parentId: 'null',
    };
    dispatch(categoriesOperations.addCategories(newCategory));
    setAdminTool(<AllComments />);
  };
  return (
    <div>
      <h2>Добавить новую категорию</h2>
      <div>
        <Input placeholder="id" value={id} onInput={(e) => setId(e.target.value)} />
        <Input placeholder="name" value={name} onInput={(e) => setName(e.target.value)} />
      </div>
      {id && name ? <Button onClick={() => addNewCat()}>Добавить</Button> : undefined}
    </div>
  );
};
export default connect(null)(AddCategories);
