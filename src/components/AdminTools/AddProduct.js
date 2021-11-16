import React, { useState } from 'react';
import { Button, Input, Select } from 'antd';
import { connect } from 'react-redux';
import CategoriesSelect from './CategoriesSelect';
import { productsOperations } from '../../store/products';

const AddProduct = ({ categories, dispatch }) => {
  const [imgURL1, setImgURL1] = useState('');
  const [imgURL2, setImgURL2] = useState('');
  const [imgURL3, setImgURL3] = useState('');
  const [imgURL4, setImgURL4] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [myCustomParam, setMyCustomParam] = useState('');
  const handleChange = (value) => {
    setCategory(value);
  };
  const allCategories = categories.map((item) => {
    return <CategoriesSelect name={item.name} key={item.id} />;
  });
  const addProductFunc = () => {
    const newProduct = {
      name: name,
      currentPrice: currentPrice,
      categories: category,
      imageUrls: [imgURL1, imgURL2, imgURL3, imgURL4],
      quantity: quantity,
      myCustomParam: myCustomParam,
    };
    dispatch(productsOperations.newProduct(newProduct));
  };

  return (
    <div>
      <p>Добавление продукта</p>
      <Input placeholder="ImgURL_1" value={imgURL1} onInput={(e) => setImgURL1(e.target.value)} />
      <Input placeholder="ImgURL_2" value={imgURL2} onInput={(e) => setImgURL2(e.target.value)} />
      <Input placeholder="ImgURL_3" value={imgURL3} onInput={(e) => setImgURL3(e.target.value)} />
      <Input placeholder="ImgURL_4" value={imgURL4} onInput={(e) => setImgURL4(e.target.value)} />
      <Input placeholder="name" value={name} onInput={(e) => setName(e.target.value)} />
      <Input
        placeholder="currentPrice"
        value={currentPrice}
        onInput={(e) => setCurrentPrice(e.target.value)}
      />
      <Select defaultValue="Category" style={{ width: 300 }} onChange={handleChange}>
        {allCategories}
      </Select>
      <Input placeholder="quantity" value={quantity} onInput={(e) => setQuantity(e.target.value)} />
      <Input
        placeholder="myCustomParam"
        value={myCustomParam}
        onInput={(e) => setMyCustomParam(e.target.value)}
      />
      <Button onClick={() => addProductFunc()}>Добавить</Button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories.data,
  };
};

export default connect(mapStateToProps)(AddProduct);
