import React from 'react';
import './UserData.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const UserData = ({ customer }) => {
  const { firstName, lastName, email, login, telephone, date } = customer;
  return (
    <div className="user-data__wrapper wrapper">
      <div className="user-data">
        <h3 className="title">Данные пользователя</h3>
        <div className="user-data__block">
          <div className="user-data__text">
            <p>Имя :</p>
          </div>
          <div className="user-data__info">
            <p>{firstName}</p>
          </div>
        </div>
        <div className="user-data__block">
          <div className="user-data__text">
            <p>Фамилия :</p>
          </div>
          <div className="user-data__info">
            <p>{lastName}</p>
          </div>
        </div>
        <div className="user-data__block">
          <div className="user-data__text">
            <p>Почта :</p>
          </div>
          <div className="user-data__info">
            <p>{email}</p>
          </div>
        </div>
        <div className="user-data__block">
          <div className="user-data__text">
            <p>Номер телефона :</p>
          </div>
          <div className="user-data__info">
            <p>{telephone}</p>
          </div>
        </div>
        <div className="user-data__block">
          <div className="user-data__text">
            <p>Логин :</p>
          </div>
          <div className="user-data__info">
            <p>{login}</p>
          </div>
        </div>
        <div className="user-data__block">
          <div className="user-data__text">
            <p>Дата регистрации пользователя :</p>
          </div>
          <div className="user-data__info">
            <p>{date.substring(0, 10)}</p>
          </div>
        </div>
        <div>
          {customer.isAdmin === true ? (
            <Link to="/admin">
              <p>вы админ</p>
            </Link>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    customer: state.customer.data,
    isLoading: state.customer.isLoading,
  };
};

export default connect(mapStateToProps)(UserData);
