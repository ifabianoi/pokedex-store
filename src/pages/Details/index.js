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
            src={pokemon.sprites.front_default || notfound}
            alt={pokemon.name}
          />
        </div>
        <div>
          <div id="title">
            <h2>{pokemon.name}</h2>
            <span>{pokemon.price}</span>
          </div>
          <div id="stats">
            <h2>Stats</h2>
            <div>
              {pokemon.stats.map((s) => (
                <li>
                  <strong>{s.stat.name}:</strong>
                  <span>{s.base_stat}</span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer>
        <button type="button">Capturar</button>
      </footer>
    </Container>
  ) : (
    <Loader>{notfound}</Loader>
  );
}
