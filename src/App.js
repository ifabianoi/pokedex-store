import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import Header from './components/Header';
import StylesGlobal from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <StylesGlobal />
    </BrowserRouter>
  );
}

export default App;
