import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { capitalize } from '../../utils/capitalize';
import { formatPrice } from '../../utils/formatPrice';
import pokeApi from '../../services/poke-api';

import notfound from '../../assets/images/img404.jpg';

import { Container, Loader } from './details.styles';


export default function Details() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    pokeApi.get(`pokemon/${id}`).then((response) => {
      setPokemon({
        ...response.data,
        name: capitalize(response.data.name),
        price: formatPrice(response.data.id),
      });
    });
  }, [id]);


  return pokemon.name ? (
    <Container>
      <Link to="/">
        <header>
          <span>Voltar</span>
        </header>
      </Link>
      <section>
        <div id="img">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default || notfound}
            alt={pokemon.name}
          />
        </div>
        <div>
          <div id="title">
            <h2>{pokemon.name}</h2>
            <span>{pokemon.price}</span>
          </div>
          <div id="character">
            <div id="height">
              <h2>Altura</h2>
              <div>
                  <li>
                    {parseFloat(pokemon.height) / 10} M
                  </li>
              </div>
            </div>
            <div id="weight">
              <h2>Peso</h2>
              <div>
                  <li>
                    {parseFloat(pokemon.weight) / 10} Kg
                  </li>
              </div>
            </div>
            <div id="types">
              <h2>Tipo</h2>
              <div>
                {pokemon.types.map((t) => (
                  <li>
                    <span>{t.type.name}</span>
                  </li>
                ))}
              </div>
            </div>
            <div id="abilities">
              <h2>Habilidades</h2>
              <div>
                {pokemon.abilities.map((a) => (
                  <li>
                    <span>{a.ability.name}</span>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  ) : (
    <Loader />
  );
}
