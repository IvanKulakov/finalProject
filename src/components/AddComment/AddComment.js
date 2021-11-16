import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Button, Input } from 'antd';
import './AddComment.scss';
import * as yup from 'yup';
import { commentOperations } from '../../store/comment';

const AddComment = ({ id, postComment }) => {
  const { TextArea } = Input;
  const validationSchema = yup.object().shape({
    comment: yup
      .string()
      .min(4, 'Login should be 4 chars minimum.')
      .typeError('Вводите строкой')
      .required('Поле обязательно для ввода'),
  });
  return (
    <div className="form-wrapper">
      <Formik
        initialValues={{
          comment: '',
        }}
        validateOnBlur
        onSubmit={(values, { resetForm }) => {
          const newComment = {
            product: id,
            content: values.comment,
          };
          postComment(newComment);
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className="comment__block">
            <TextArea
              rows={4}
              placeholder="Оставьте свой комментарий"
              name="comment"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.comment}
              className="comment__wrapper"
            />
            {touched.comment && errors.comment && (
              <p className="comment-error__massage">{errors.comment}</p>
            )}
            <Button
              disabled={!isValid && !dirty}
              data-testid="button-submit"
              type="primary"
              shape="round"
              onClick={handleSubmit}
            >
              Отправить
            </Button>
          </div>
        )}
      </Formik>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    comment: state.comment.data,
    isLoading: state.item.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    postComment: (data) => dispatch(commentOperations.postComment(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
