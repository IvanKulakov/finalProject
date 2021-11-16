import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Button, Input } from 'antd';
import '../RegistrationList/Form.scss';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { customerOperations } from '../../store/user';
import './LoginList.scss';

const LoginList = ({ dispatch }) => {
  const hist = useHistory();
  const validationSchema = yup.object().shape({
    loginOrEmail: yup.string().typeError('Вводите строкой').required('Поле обязательно для ввода'),
    password: yup
      .string()
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .required('Поле обязательно для ввода'),
  });
  return (
    <div className="form__wrapper wrapper">
      <Formik
        initialValues={{
          loginOrEmail: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={(values) => {
          dispatch(customerOperations.setLoginCustomer(JSON.stringify(values)));
          hist.push('/');
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, touched, errors, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className="form__container">
            <p className="title">Авторизация</p>
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <div className="form-input__wrapper">
                <Form.Item label="Username" name="username">
                  <Input
                    placeholder="Введите ник"
                    type="text"
                    name="loginOrEmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.loginOrEmail}
                  />
                </Form.Item>
                {touched.loginOrEmail && errors.loginOrEmail && (
                  <p className="error__message">{errors.loginOrEmail}</p>
                )}
              </div>
              <div className="form-input__wrapper">
                <Form.Item label="Password" name="password">
                  <Input.Password
                    placeholder="Введите пароль"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </Form.Item>
                {touched.password && errors.password && (
                  <p className="error__message">{errors.password}</p>
                )}
              </div>
              <Button
                disabled={!isValid && !dirty}
                onClick={handleSubmit}
                type="submit"
                className="button-submit"
                data-testid="button-submit"
              >
                Отправить
              </Button>
            </Form>
            <p className="form-registration__text">
              Первый раз на сайте? - <Link to="/registration">Зарегистрирутесь!</Link>
            </p>
          </div>
        )}
      </Formik>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.token.data,
  };
};

export default connect(mapStateToProps)(LoginList);
