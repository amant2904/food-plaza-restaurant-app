import React, { useReducer } from 'react'
import CartContext from './Cart-context'

const itemListReducer = (state, action) => {
    if (action.type === "add") {
        let checkExistingIndex = state.items.findIndex((item) => {
            return item.id === action.newItem.id;
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
    else if (action.type === "remove") {
        let checkExistingIndex = state.items.findIndex((item) => {
            return item.id === action.itemId;
        })
        if (state.items[checkExistingIndex].amount === 1) {
            state.items.splice(checkExistingIndex, 1);
            return { items: state.items };
        }
        else {
            let currAmount = state.items[checkExistingIndex].amount;
            state.items[checkExistingIndex].amount = currAmount - 1;
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

    const removeCartItem_Handler = (id) => {
        dispatchItemList({ type: "remove", itemId: id })
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
