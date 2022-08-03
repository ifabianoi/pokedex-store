import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from "../Button";

import { ListItem, Loader } from './card.styles';
import { capitalize } from '../../utils/capitalize';
import { formatPrice } from '../../utils/formatPrice';
import notfound from '../../assets/images/img404.jpg';
import pokeball from '../../assets/images/pokeball_gray.png'

import axios from 'axios';

export default function Card({ url, price, addCart, data }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, [url]);

  function handleClick() {
    let data = {
      id: pokemon.id,
      count: 1,
      name: pokemon.name,
      types: pokemon.types,
      img: pokemon.sprites.other["official-artwork"].front_default,
      price: price,
    };

    addCart(data);
  }

  return pokemon.name ? (
    <ListItem>
      <Link to={`/details/${pokemon.id}`}>
        <div id="link">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default || notfound}
            alt={pokemon.name}
          />
          <strong>{capitalize(pokemon.name)}</strong>
          <span>{formatPrice(price)}</span>
        </div>
      </Link>
      <Button
              label="CAPTURAR"
              onClick={handleClick}
              type="primmary"
      />
      <img id="pokeball" src={pokeball} alt="Logo PokéDex" />
    </ListItem>
  ) : (
    <Loader />
  );
}