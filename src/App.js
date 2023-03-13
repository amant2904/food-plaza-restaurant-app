import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart"

function App() {

  const [showCart, setShowCart] = useState(false);

  const cartBtn_handler = () => {
    setShowCart(true);
  }

  const cartClose_handler = () => {
    setShowCart(false);
  }

  return (
    <React.Fragment>
      <Header cartBtn_handler={cartBtn_handler} />
      <Meals />
      {showCart && <Cart cartClose={cartClose_handler} totalPrice="45.99" />}
    </React.Fragment>
  );
}

export default App;
