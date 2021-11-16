import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Typography } from 'antd';
import 'antd/dist/antd.css';
import UserData from '../../components/UserData/UserData';
import ChangeUserData from '../../components/ChangeUserData/ChangeUserData';
import ChangeUserPass from '../../components/ChangeUserPass/ChangeUserPass';
import Item from '../../components/Item/Item';
import Loader from '../../components/Loader/Loader';
import { logOut } from '../../helpers/index';
import '../RegistrationList/Form.scss';
import '../../components/ProductsList/ProductsList.scss';

const UserInfo = ({ customer, history, dispatch, isLoading }) => {
  const { Title } = Typography;
  const [userInfo, setUserInfo] = useState(<UserData />);
  const hist = useHistory();
  const { firstName } = customer;
  const historyListItems = history.map((item) => {
    return <Item item={item} key={item.id} />;
  });
  return (
    <div className="wrapper">
      <div className="categorieslist--wrapper">
        <Button
          className="category__button"
          type="submit"
          onClick={() => setUserInfo(<UserData />)}
        >
          Даные пользователя
        </Button>
        <Button
          className="category__button"
          type="submit"
          onClick={() => setUserInfo(<ChangeUserData setUserInfo={setUserInfo} />)}
        >
          Изменить данные
        </Button>
        <Button
          className="category__button"
          type="submit"
          onClick={() => setUserInfo(<ChangeUserPass />)}
        >
          Изменить пароль
        </Button>
        <Button
          className="category__button"
          type="submit"
          onClick={() => logOut({ dispatch, hist })}
        >
          Выйти
        </Button>
      </div>
      <Title level={2}>Здраствуйте, {firstName}</Title>
      {userInfo}
      {history.length === 0 ? (
        false
      ) : (
        <div className="productsList--wrapper">
          <h2 className="productsList--title">Вы недавно смотрели</h2>
          <div className="productsList--content">{isLoading ? <Loader /> : historyListItems}</div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    customer: state.customer.data,
    history: state.history.data,
    isLoading: state.customer.isLoading,
  };
};

export default connect(mapStateToProps)(UserInfo);
