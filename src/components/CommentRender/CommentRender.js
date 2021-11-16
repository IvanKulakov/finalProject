import React from 'react';
import { Avatar, Comment } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './CommentRender.scss';

const CommentRender = ({ name, content }) => {
  return (
    <div className="comment__wrapper">
      <Comment
        author={name}
        avatar={
          <Avatar
            size="small"
            style={{ fontSize: '25px', height: '25px', color: 'black' }}
            icon={<UserOutlined style={{ color: '#f56a00', backgroundColor: '#fde3cf' }} />}
          />
        }
        content={<p>{content}</p>}
      />
    </div>
  );
};

export default CommentRender;
