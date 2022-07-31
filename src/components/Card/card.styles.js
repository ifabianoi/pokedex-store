import styled from 'styled-components';
import pokeload from '../../assets/images/pokeload.gif'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  max-height: 305px;
  a {
    text-decoration: none;
    color: #000;
    div {
      display: flex;
      flex-direction: column;
      img {
        align-self: center;
        width: 150px;
        max-height: 150px;
      }
      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
      }
      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
        text-decoration: none;
      }
    }
  }
  button {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    display: flex;
    align-items: center;
    transition: background 0.2s;
    &:hover {
      filter: brightness(80%);
    }
    div {
      display: flex;
      align-items: center;
      padding: 12px;
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