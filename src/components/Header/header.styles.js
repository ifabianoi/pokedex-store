import styled from 'styled-components';
import { Link } from 'react-router-dom';
import header_bg from '../../assets/images/header_bg.png'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  background: #424242 url(${header_bg});
  img {
    max-width: 10rem;
  }
`;

export const Anchor = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  svg {
    margin: 5px;
  }
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #fff;
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
`;