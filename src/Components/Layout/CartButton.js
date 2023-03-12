import React from "react";
import "./CartButton.css";

const CartButton = () => {
    return (
        <button>
            <span className='cartBtn_text'>Your Cart</span>
            <span className='cartItems_count'>3</span>
        </button>
    )
}

export default CartButton;