import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { useHistory } from 'react-router';
import AllComments from '../../components/AdminTools/AllComments';
import CategoriesTool from '../../components/AdminTools/CategoriesTool';
import { logOut } from '../../helpers';
import ProductsTool from '../../components/AdminTools/ProductsTool';
import SliderTool from '../../components/AdminTools/SliderTool';
import '../../App.scss';

const Admin = ({ dispatch }) => {
  const hist = useHistory();
  const [adminTool, setAdminTool] = useState(<AllComments />);
  return (
    <div className="wrapper">
      <p>Hello ADMIN</p>
      <div className="categoriesList--wrapper">
        <Button
          className="category__button"
          type="submit"
          onClick={() => setAdminTool(<AllComments />)}
        >
          Коментарии
        </Button>
        <Button
          className="category__button"
          type="submit"
          onClick={() => setAdminTool(<CategoriesTool setAdminTool={setAdminTool} />)}
        >
          Категории
        </Button>
        <Button
          className="category__button"
          type="submit"
          onClick={() => setAdminTool(<ProductsTool setAdminTool={setAdminTool} />)}
        >
          Товары
        </Button>
        <Button
          className="category__button"
          type="submit"
          onClick={() => setAdminTool(<SliderTool setAdminTool={setAdminTool} />)}
        >
          Слайдер
        </Button>
        <Button
          className="category__button"
          type="submit"
          onClick={() => logOut({ dispatch, hist })}
        >
          Выйти
        </Button>
      </div>

      {adminTool}
    </div>
  );
};

export default connect(null)(Admin);
