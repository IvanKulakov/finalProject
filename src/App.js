import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => (
  <div className="App">
    <div className="container">
      <Header />
      <AppRoutes />
    </div>
    <Footer />
  </div>
);

export default App;
