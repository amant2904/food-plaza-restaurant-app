import React, { useContext } from "react";
import classes from "./CartButton.module.css";
import CartContext from "../../Store/Cart-context";

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((currNumber, item) => {
        return currNumber + parseInt(item.amount);
    }, 0)

    return (
        <button className={classes.cartBtn} onClick={props.cartBtn_handler}>
            <span className={classes.cartBtn_text}>Your Cart</span>
            <span className={classes.cartItems_count}>{numberOfItems}</span>
        </button>
    )
}

export default CartButton;