import React from "react";
import classes from "./CartButton.module.css";

const CartButton = () => {
    return (
        <button className={classes.cartBtn}>
            <span className={classes.cartBtn_text}>Your Cart</span>
            <span className={classes.cartItems_count}>3</span>
        </button>
    )
}

export default CartButton;