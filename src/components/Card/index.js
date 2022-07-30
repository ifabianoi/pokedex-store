import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdAddShoppingCart } from 'react-icons/md';

import { ListItem } from './card.styles';
import { capitalize } from '../../utils/capitalize';

export default function Card({ url, price }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios.get(url).then((response) => {
      setPokemon(response.data);
    });
  }, [url]);

  return pokemon.name ? (
    <ListItem>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <strong>{capitalize(pokemon.name)}</strong>
      <span>{price}</span>

      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#fff" /> 2
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </ListItem>
  ) : (
    <p>Carregandp</p>
  );
}