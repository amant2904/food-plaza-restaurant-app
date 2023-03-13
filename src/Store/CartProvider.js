import React, { useReducer } from 'react'
import CartContext from './Cart-context'

const itemListReducer = (state, action) => {
    if (action.type === "add") {
        let checkExistingIndex = state.items.findIndex((item) => {
            return item.id === action.newItem.id
        })
        if (checkExistingIndex === -1) {
            return { items: [...state.items, action.newItem] }
        }
        else {
            let newAmount = state.items[checkExistingIndex].amount + action.newItem.amount;
            state.items[checkExistingIndex].amount = newAmount;
            return { items: state.items };
        }
    }
    return {
        items: []
    }
}

export default function CartProvider(props) {
    const [itemList, dispatchItemList] = useReducer(itemListReducer, {
        items: []
    });

    const addCartItem_Handler = (obj) => {
        dispatchItemList({ type: "add", newItem: obj })
    }

    const removeCartItem_Handler = () => {

    }

    const context = {
        items: itemList.items,
        addCartItemHandler: addCartItem_Handler,
        removeCartItemHandler: removeCartItem_Handler
    }

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}
