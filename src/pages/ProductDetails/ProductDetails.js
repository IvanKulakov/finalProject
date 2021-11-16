import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Typography } from 'antd';
import { itemOperations } from '../../store/item';
import Loader from '../../components/Loader/Loader';
import FavoriteBtn from '../../components/FavoriteBtn/FavoriteBtn';
import CartBtn from '../../components/CartBtn/CartBtn';
import ImageCard from '../../components/ImageCard/ImageCard';
import './ProductDetails.scss';
import 'antd/dist/antd.css';
import AddComment from '../../components/AddComment/AddComment';
import { commentOperations } from '../../store/comment';
import GetComment from '../../components/GetComment/GetComment';

const ProductDetails = ({ dispatch, item, isLoading, customer }) => {
  /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
  const id = item._id;
  const [btnText, setBtnText] = useState('');
  const params = useParams();
  useEffect(() => {
    dispatch(itemOperations.getItem(params.itemNo));
    dispatch(commentOperations.getComment(id));
  }, [dispatch, id, params.itemNo]);
  if (isLoading) return <Loader />;
  const { Title, Text } = Typography;
  return (
    <div className="wrapper product-details">
      <ImageCard item={item} />
      <div className="product-details__info">
        <div className="product-details__info-block">
          <h1 className="product-details__name">{item.name} </h1>
          <div className="product-details__add-info">
            <Title className="product-details__price" level={5}>
              {item.currentPrice} ₴
            </Title>
            <Text className="product-details__set-number" type="secondary">
              Артикул {item.itemNo}
            </Text>
          </div>
        </div>
        <div className="product-details__icon-block">
          <FavoriteBtn
            itemData={item}
            itemNo={item.itemNo}
            btnText={btnText}
            setBtnText={setBtnText}
          />
          <div className="product-details__section">
            <div>
              {customer.firstName ? <CartBtn /> : <CartBtn disabled />}
              <Text>В наличии {item.quantity} шт</Text>
            </div>
          </div>
        </div>
        <Title className="product-details__title" level={4}>
          Описание
        </Title>
        <Text>{item.myCustomParam}</Text>
        {/* <div>
          <Text className="product-details__set-number" type="secondary">
            Артикул {item.itemNo}
          </Text>
        </div> */}
        <Title className="product-details__title" level={4}>
          Отзывы о товаре
        </Title>
        <GetComment id={id} />
        {!customer.firstName ? (
          <p className="comment__warning">
            Добавить отзыв может только зарегистрированный пользователь
          </p>
        ) : (
          <AddComment id={id} />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    item: state.item.data,
    customer: state.customer.data,
    connect: state.comment.data,
    isLoading: state.item.isLoading,
  };
};

export default connect(mapStateToProps)(ProductDetails);
