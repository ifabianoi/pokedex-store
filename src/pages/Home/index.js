import React, { useState, useEffect } from 'react';
import { GoPlus, GoDash } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

import Card from '../../components/Card';
import pokeApi from '../../services/poke-api';
import { formatPrice } from '../../utils/formatPrice';
import { Cart, Container, Border, ProductList, Search, Total } from './home.styles';
import swal from 'sweetalert';

export default function Store() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeSearch, setPokeSearch] = useState('');
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    pokeApi.get('type/10').then((response) => {
      const data = response.data.pokemon.map((pokeData) => ({
        ...pokeData.pokemon,
        price: Math.ceil(Math.random() * 100),
      }));
      setPokemon(data);
    });
  }, []);

  useEffect(() => {
    setCartData(JSON.parse(localStorage.getItem("cartData")));
    setTotalPrice(JSON.parse(localStorage.getItem("totalPrice")));
  }, []);

  function addCart(newItem) {
    let array = cartData || [];
    let alreadyExists = false;

    array.forEach((item) => {
      if (item.id === newItem.id) {
        alreadyExists = true;
        item.count += 1;
        setCartData([...array]);
      }
    });

    if (!alreadyExists) {
      array.push({ ...newItem, count: 1 });
    }

    if (cartData !== null) {
      let total = cartData.reduce(
        (total, { price = 0, count }) => total + count * price,
        0
      );
      setTotalPrice(total);
      localStorage.setItem("totalPrice", JSON.stringify(total));
    } else {
      setTotalPrice(newItem.price);
      localStorage.setItem("totalPrice", JSON.stringify(newItem.price));
    }
    setCartData([...array]);

    localStorage.setItem("cartData", JSON.stringify(cartData));
  }

  function increment(item) {
    const array = cartData;

    array.forEach((cart) => {
      if (cart.id === item.id) {
        cart.count += 1;
        setCartData([...array]);
        localStorage.setItem("cartData", JSON.stringify(cartData));
        setTotalPrice(
          array.reduce(
            (total, { price = 0, count }) => total + count * price,
            0
          )
        );
        return localStorage.setItem(
          "totalPrice",
          JSON.stringify(
            array.reduce(
              (total, { price = 0, count }) => total + count * price,
              0
            )
          )
        );
      }
    });
  }

  function decrement(item) {
    const array = cartData;

    array.forEach((cart) => {
      if (cart.id === item.id) {
        if (cart.count > 1) {
          cart.count -= 1;
          setCartData([...array]);
          localStorage.setItem("cartData", JSON.stringify(cartData));
          setTotalPrice(
            array.reduce(
              (total, { price = 0, count }) => total + count * price,
              0
            )
          );
          return localStorage.setItem(
            "totalPrice",
            JSON.stringify(
              array.reduce(
                (total, { price = 0, count }) => total + count * price,
                0
              )
            )
          );
        }
      }
    });
  }

  const removeFromCart = (item) => {
    setCartData(cartData.filter((cart) => cart.id !== item.id));
    setTotalPrice(
      cartData
        .filter((cart) => cart.id !== item.id)
        .reduce((total, { price = 0, count }) => total + count * price, 0)
    );
    localStorage.setItem(
      "cartData",
      JSON.stringify(cartData.filter((cart) => cart.id !== item.id))
    );

    return localStorage.setItem(
      "totalPrice",
      JSON.stringify(
        cartData
          .filter((cart) => cart.id !== item.id)
          .reduce((total, { price = 0, count }) => total + count * price, 0)
      )
    );
  };

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
                addCart={addCart}
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
              {cartData !== null ? null : <h4>Seu carrinho está vazio!</h4>}
              {cartData !== null
                ? cartData.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img src={item.img} alt={item.name} />
                    <div className="cart-item-info">
                      <h3>{item.name.slice(0, 20)}</h3>                      
                      <div className="cart-item-btns">
                        <button onClick={() => decrement(item)}>
                          <GoDash size={20} color="#FFF" />
                        </button>

                        <button onClick={() => increment(item)}>
                          <GoPlus size={20} color="#FFF" />
                        </button>
                        <button onClick={() => removeFromCart(item)}>
                          <IoIosClose size={30} color="#FFF" />
                        </button>
                      </div>
                      <span>
                        {item.count} x R$ {item.price}
                      </span>
                    </div>
                  </div>
                ))
                : null}
            </div>
          </Border>
          <footer>
            <Total>
              {cartData === null ? null : (
                <>
                  <span>Total:</span>
                  <strong>{formatPrice(totalPrice)}</strong>
                </>
              )}
            </Total>

            <button
              type="button"
              onClick={() =>
                swal(
                  'Parabéns',
                  'compra realizada.',
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