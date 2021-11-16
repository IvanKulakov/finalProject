import React from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { message } from 'antd';
import { customerOperations } from '../../store/user';
import UserData from '../UserData/UserData';

const ChangeUserData = ({ customer, upDateCustomer, setUserInfo }) => {
  const validationSchema = yup.object().shape({
    firstName: yup.string().typeError('Вводите строкой').required('Поле обязательно для ввода'),
    lastName: yup.string().typeError('Вводите строкой').required('Поле обязательно для ввода'),
    login: yup
      .string()
      .matches(/[a-zA-Z]/, 'Login can only contain Latin letters.')
      .min(4, 'Login should be 4 chars minimum.')
      .max(8, 'Login should be 8 chars maximum.')
      .typeError('Вводите строкой')
      .required('Поле обязательно для ввода'),
    email: yup.string().email('Введите корректный email').required('Поле обязательно для ввода'),
  });
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          firstName: `${customer.firstName}`,
          lastName: `${customer.lastName}`,
          login: `${customer.login}`,
          email: `${customer.email}`,
        }}
        validateOnBlur
        onSubmit={(values) => {
          upDateCustomer(values);
          setUserInfo(<UserData />);
          message.success('Изменения внесены!', 2);
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className="form__container">
            <p className="title">Изменение данных</p>
            <p>
              <input
                className="input-form"
                placeholder="Введите Ваше имя"
                type="text"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
            </p>
            {touched.firstName && errors.firstName && (
              <p className="error-massage">{errors.firstName}</p>
            )}
            <p>
              <input
                className="input-form"
                placeholder="Введите Вашу фамилию"
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
            </p>
            {touched.lastName && errors.lastName && (
              <p className="error-massage">{errors.lastName}</p>
            )}
            <p>
              <input
                className="input-form"
                placeholder="Введите ник"
                type="text"
                name="login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.login}
              />
            </p>
            {touched.login && errors.login && <p className="error-massage">{errors.login}</p>}
            <p>
              <input
                className="input-form"
                placeholder="Введите Ваш email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {touched.email && errors.email && <p className="error-massage">{errors.email}</p>}
            <button
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type="submit"
              className="button-submit"
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
const mapStateToProps = (state) => {
  return {
    customer: state.customer.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    upDateCustomer: (data) => dispatch(customerOperations.upDateCustomer(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeUserData);
