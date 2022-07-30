import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  #root {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
  body {
    background: transparent url(../assets/images/content_bg.png) left top;
    background-size: 100% 1px;
    display: block;
    margin: 0 auto;
    overflow: hidden;
    max-width: 1024px;
    width: 100%;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  
  button {
    cursor: pointer;
  }
`;