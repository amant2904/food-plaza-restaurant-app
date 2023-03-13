import React, { useState } from 'react'
import CartContext from './Cart-context'

export default function CartProvider(props) {
    const [itemList, setItemList] = useState([]);

    const addCartItem_Handler = (obj) => {
        setItemList([...itemList, obj])
    }

    const removeCartItem_Handler = () => {

    }

    const context = {
        items: itemList,
        addCartItemHandler: addCartItem_Handler,
        removeCartItemHandler: removeCartItem_Handler
    }

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}
