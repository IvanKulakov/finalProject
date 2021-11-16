import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import NumberFormat from 'react-number-format';
import './Form.scss';
import { message } from 'antd';

const RegistrationList = () => {
  const hist = useHistory();
  const validationSchema = yup.object().shape({
    firstName: yup.string().typeError('Вводите строкой').required('Поле обязательно для ввода'),
    lastName: yup.string().typeError('Вводите строкой').required('Поле обязательно для ввода'),
    login: yup
      .string()
      .min(4, 'Login should be 4 chars minimum.')
      .max(8, 'Login should be 8 chars maximum.')
      .matches(/[a-zA-Z]/, 'Login can only contain Latin letters.')
      .typeError('Вводите строкой')
      .required('Поле обязательно для ввода'),
    password: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required('Поле обязательно для ввода'),
    email: yup.string().email('Введите корректный email').required('Поле обязательно для ввода'),
  });
  const clearCart = async (data) => {
    const body = JSON.stringify(data);
    await axios({
      method: 'post',
      url: `/api/customers`,
      headers: { 'Content-Type': 'application/json' },
      data: body,
    })
      .then((response) => {
        if (response.status === 200) hist.push('/login');
        message.success('Спасибо за регистрацию!', 2);
      })
      .catch((error) => {
        message.error(`${error.response.data.message}`, 2);
      });
  };
  return (
    <div className="form__wrapper wrapper">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          login: '',
          telephone: '',
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          clearCart(values);
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className="form__container">
            <p className="title">Регистрация</p>
            <div style={{ position: 'relative' }}>
              <p className="input-from__wrapper input-from__wrapper--reg">
                <label htmlFor="firstName" title="firstName">
                  Имя
                  <input
                    className="input-form input-form--reg"
                    placeholder="Введите Ваше имя"
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                </label>
              </p>
              {touched.firstName && errors.firstName && (
                <p className="error__message error__message--reg">{errors.firstName}</p>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <p className="input-from__wrapper input-from__wrapper--reg">
                <label htmlFor="lastName" title="lastName">
                  Фамилия
                  <input
                    className="input-form input-form--reg"
                    placeholder="Введите Вашу фамилию"
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                </label>
              </p>
              {touched.lastName && errors.lastName && (
                <p className="error__message error__message--reg">{errors.lastName}</p>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <p className="input-from__wrapper input-from__wrapper--reg">
                <label htmlFor="login" title="login">
                  Логин
                  <input
                    className="input-form input-form--reg"
                    placeholder="Введите ник"
                    type="text"
                    name="login"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.login}
                  />
                </label>
              </p>
              {touched.login && errors.login && (
                <p className="error__message error__message--reg">{errors.login}</p>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <p className="input-from__wrapper input-from__wrapper--reg">
                <label htmlFor="password" title="password">
                  Пароль
                  <input
                    className="input-form input-form--reg"
                    placeholder="Введите пароль"
                    type="text"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </label>
              </p>
              {touched.password && errors.password && (
                <p className="error__message error__message--reg">{errors.password}</p>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <p className="input-from__wrapper input-from__wrapper--reg">
                <label htmlFor="email" title="email">
                  Почта
                  <input
                    className="input-form input-form--reg"
                    placeholder="Введите Ваш email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </label>
              </p>
              {touched.email && errors.email && (
                <p className="error__message error__message--reg">{errors.email}</p>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <p className="input-from__wrapper input-from__wrapper--reg">
                <>{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}</>
                <label htmlFor="telephone" title="telephone">
                  Телефон
                  <NumberFormat
                    format="+38##########"
                    mask="_"
                    className="input-form input-form--reg"
                    placeholder="Введите Ваш номер телефона"
                    type="telephone"
                    name="telephone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.telephone}
                  />
                </label>
              </p>
              {touched.telephone && errors.telephone && (
                <p className="error__message error__message--reg">{errors.telephone}</p>
              )}
            </div>
            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type="submit"
              className="button-submit ant-btn"
              data-testid="button-submit"
            >
              Отправить
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationList;
