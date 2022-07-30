import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import { Container } from './header.styles';

export default function Header() {
  return (
    <Container>      
      <Link to="/">
        <img src={logo} alt="Logo PokéDex" />
      </Link>
    </Container>
  );
}