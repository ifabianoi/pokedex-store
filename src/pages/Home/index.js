import React, { useState, useEffect } from 'react';

import Card from '../../components/Card';
import pokeApi from '../../services/poke-api';
import { formatPrice } from '../../utils/formatPrice';
import { Cart, Container, Border, ProductList, Search, Total } from './home.styles';
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
          <Border>
            <div>
              <h2>PokéCarrinho</h2>
            </div>
            <div id="poke-list">
              <table>
                <thead>
                  <tr>
                    <th />
                    <th>PRODUTO</th>
                    <th>QTD</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {'123456789'.split('').map((x) => (
                    <tr key={x}>
                      <td>
                        <img alt="test" />
                      </td>
                      <td>
                        <strong>Teste Nome</strong>
                        <span>R$ 20,00</span>
                      </td>
                      <td>
                        <div>
                          <input type="number" readOnly value={10} />
                          <div>
                            <button
                              type="button"
                              onClick={() => console.log('decrement')}
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => console.log('increment')}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => console.log('remove')}
                        >
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>    
            </Border>      
            <footer>
              <Total>
                <span>TOTAL</span>
                <strong>R$ 20,00</strong>
              </Total>

              <button
                type="button"
                onClick={() =>
                  swal(
                    'Compra Finalizada',
                    '',
                    'success',
                  )
                }
              >
                {' '}
                Finalizar
              </button>              
            </footer>          
        </Cart>        
      </Container>
    </>
  );
}