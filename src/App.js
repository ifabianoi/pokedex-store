import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import Header from './components/Header';

import StylesGlobal from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <StylesGlobal />
      <ToastContainer autoClose={2000} />
    </BrowserRouter>
  );
}

export default App;
