import { createGlobalStyle } from 'styled-components';
import body_bg from '../assets/images/content_bg.png'

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
  }
  body {
    background: #fff url(${body_bg});
    font-size: 16px;
    color: #000;
    height: 100%;
  }
  body, input, button {
    font: 14px Roboto, sans-serif;
  }
  
  button {
    cursor: pointer;
  }
`;