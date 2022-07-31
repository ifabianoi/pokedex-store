import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { ListItem, Loader } from './card.styles';
import { capitalize } from '../../utils/capitalize';
import notfound from '../../assets/images/img404.jpg';
import pokeball from '../../assets/images/pokeball_gray.png'
import pokeload from '../../assets/images/pokeload.gif'

import axios from 'axios';

export default function Card({ url, price }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, [url]);

  return pokemon.name ? (
    <ListItem>
      <Link to={`/details/${pokemon.id}`}>
        <div id="link">
          <img
            src={pokemon.sprites.front_default || notfound}
            alt={pokemon.name}
          />
          <strong>{capitalize(pokemon.name)}</strong>
          <span>{price}</span>
        </div>
      </Link>
      <button type="button">
        <div>
          <img src={pokeball} alt="Logo PokéDex" />
        </div>

        <span>CAPTURAR</span>
      </button>
    </ListItem>
  ) : (
    <Loader />
  );
}