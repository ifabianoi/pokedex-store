import React, { useState, useEffect } from 'react';

import Card from '../../components/Card';
import pokeApi from '../../services/poke-api';
import { formatPrice } from '../../utils/formatPrice';
import { Cart, Container, ProductList, Search, Total } from './home.styles';
import swal from 'sweetalert';

export default function Store() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeSearch, setPokeSearch] = useState('');

  useEffect(() => {
    pokeApi.get('type/10').then((response) => {
      const data = response.data.pokemon.map((pokeData) => ({
        ...pokeData.pokemon,
        price: formatPrice(Math.ceil(Math.random() * 100)),
      }));
      setPokemon(data);
    });
  }, []);

  return (
    <>
      <Search>
        <input
          type="text"
          vale={pokeSearch}
          placeholder="Buscar Pokemon"
          onChange={(event) => setPokeSearch(event.target.value)}
        />
      </Search>
      <Container>
        <ProductList>
          {pokemon
            .filter((pokemonData) => pokemonData.name.includes(pokeSearch))
            .map((filteredPokemon) => (
              <Card
                key={filteredPokemon.id}
                price={filteredPokemon.price}
                url={filteredPokemon.url}
              />
            ))
          }
        </ProductList>
        <Cart>
          <p>PokéBola</p>
        </Cart>
      </Container>
    </>
  );
}