import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart"
import CartProvider from "./Store/CartProvider";

function App() {

  const [showCart, setShowCart] = useState(false);

  const cartBtn_handler = () => {
    setShowCart(true);
  }

  const cartClose_handler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart cartClose={cartClose_handler} />}
      <Header cartBtn_handler={cartBtn_handler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
