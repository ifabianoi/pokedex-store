import styled from 'styled-components';
import header_bg from '../../assets/images/header_bg.png'

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
`;

export const Cart = styled.div`
  background: #f0f0f0;
  border-radius: 4px;
  height: 500px;
  width: 400px;
  position: sticky;
  top: 20px;
  border: 30px solid #d50a2c;
  h2 {
    text-align: center;
    background: #424242 url(${header_bg});
    margin-bottom: 10px;
    padding: 10px;
    color: #f0f0f0;
  }
  footer {
    padding-top: 10px;
    span {
      font-size: 16px;
      font-weight: 700;    
      margin: 5px;
    }
    button {
      background: #424242 url(${header_bg});
      color: #fff;
    }
  }
`;

export const Border = styled.div`
  div#poke-list {
    overflow: auto;
    max-height: 300px;
  }

  div.cart-item {
    position: relative;
    cursor: pointer;
    width: 100%;
    height: 150px;
    padding: 20px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,.3);
  
    img {
      height: 90px;
      width: 90px;
      object-fit: contain;
    }
    div.cart-item-info {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      h3 {
        font-size: 16px;
        font-weight: 600;
        color: #12121d;
        text-transform: capitalize;
      }
      span {
        font-weight: 500;
        font-size: 10px;
        text-transform: capitalize;
        color: rgba(0,0,0,.6);
        padding: 2px 4px;
        border-radius: 5px;
        margin: 0 5px 5px 0;
      }
      div.cart-item-btns {
        display: flex;
        button {
          cursor: pointer;
          width: 60px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #cd121f;
          border: none;
          border-radius: 5px;
          margin: 5px;
          transition: all .3s ease;
        }
      }
    }

  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 20px;
  padding: 20px;
  button {
    border: 0;
    padding: 12px 20px;
    width: 100%;
    font-weight: bold;
    text-transform: uppercase;
    transition: 0.2s;
    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  input {
    width: 30%;
    margin-bottom: 20px;
    padding-left: 35px;    
    border: 0px solid transparent;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    transition: all 0.2s ease;
    position: absolute;
    margin-top: -100px;

    &::placeholder {
      color: #b3b3b3;
    }
    &:focus {
      outline: none;
      box-shadow: 2px 3px 20px 1px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-top: 1px solid #000;
  margin: 5px 5px 0;
  font-weight: 400
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 16px;
    font-weight: 700;    
    margin: 5px;
  }  
`;