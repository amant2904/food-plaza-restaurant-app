import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addCartItemHandler: () => { },
    removeCartItemHandler: () => { }
})

export default CartContext;