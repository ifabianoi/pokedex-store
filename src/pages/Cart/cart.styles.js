import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  width: 80%;
  margin: 30px auto;
  max-height: 80vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  div {
    overflow: auto;
    height: 100%;
  }
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      width: 100%;
      font-weight: bold;
      text-transform: uppercase;
      transition: 0.2s;
      &:hover {
        filter: brightness(80%);
      }
    }
  }
`;

export const PokeTable = styled.table`
  width: 100%;
  overflow: auto;
  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
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
    font-size: 20px;
    margin: 5px 20px;
  }
  strong {
    font-size: 20px;
    margin: 5px 20px;
  }
`;