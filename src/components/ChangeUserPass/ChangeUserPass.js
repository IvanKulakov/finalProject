import React from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { Formik } from 'formik';
import { customerOperations } from '../../store/user';

const ChangeUserPass = ({ dispatch }) => {
  const validationSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required('Поле обязательно для ввода'),
    newPassword: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required('Поле обязательно для ввода'),
  });
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          password: '',
          newPassword: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          dispatch(customerOperations.upDatePassCustomer(JSON.stringify(values)));
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className="">
            <p className="title">Изменение пароля</p>
            <p>
              <input
                className="input-form"
                placeholder="Введите старый пароль"
                type="text"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && (
              <p className="error__message">{errors.password}</p>
            )}
            <p>
              <input
                className="input-form"
                placeholder="Введите новый пароль"
                type="text"
                name="newPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPassword}
              />
            </p>
            {touched.newPassword && errors.newPassword && (
              <p className="error__message">{errors.newPassword}</p>
            )}
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

export default connect(mapStateToProps)(ChangeUserPass);
