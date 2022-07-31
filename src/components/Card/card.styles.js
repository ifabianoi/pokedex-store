import styled from 'styled-components';
import pokeload from '../../assets/images/pokeload.gif'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background: #d50a2c;
  border-radius: 25px;
  padding: 20px;
  max-height: 305px;
  &:hover {
    transform: scale(1.02);
  }
  a {
    text-decoration: none;
    color: #000;
    div {
      display: flex;
      flex-direction: column;
      background: #d50a2c;
      img {
        align-self: center;
        width: 80%;
        max-height: 150px;
        border: 5px solid #666666;
        background: #f0f0f0;
        margin-top: 5px;
      }
      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #fff;
        margin-top: 5px;
        align-self: center;
      }
      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
        text-decoration: none;
        align-self: center;
        color: #fff;
      }
    }
  }
  button {
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: 0.2s;
    width: 65% !important;
    margin: 0 auto;
    &:hover {
      filter: brightness(80%);
    }
    div {
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0.1);
      svg {
        margin-right: 5px;
      }
    }
    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      padding: 0 5px;
    }
    img {
      width: 15px;
    }
  }
`;

export const Loader = styled.div`
    background: url(${pokeload}) center center no-repeat;
    background-size: 32px 32px;
    width: 32px;
    height: 32px;
    position: absolute;
    left: 48%;
    top: 20%;
`