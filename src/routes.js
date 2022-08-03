import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Details from './pages/Details';

export default function Routes({
  cartData,
  setCartData,
  searchPokemon,
  setSearchPokemon,
  totalPrice,
  setTotalPrice,
  modalBuy,
  setModalBuy,
}) {
  return (
    <Switch>
      <Route exact path="/">  <Home
        cartData={cartData}
        setCartData={setCartData}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
        searchPokemon={searchPokemon}
        setSearchPokemon={setSearchPokemon}
        modalBuy={modalBuy}
        setModalBuy={setModalBuy}
      />
      </Route>
      <Route path="/cart" component={Cart} />
      <Route path="/details/:id" component={Details} />      
    </Switch>
  );
}
