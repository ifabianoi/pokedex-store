import styled from 'styled-components';
import pokeload from '../../assets/images/pokeload.gif'

export const Container = styled.div`
  
`;

export const Loader = styled.div`
    background: url(${pokeload}) center center no-repeat;
    background-size: 800px 600px;
    width: 800px;
    height: 600px;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translate(-50%);
`;