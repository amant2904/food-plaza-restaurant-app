import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import Card from '../UI/Card'
import classes from "./Cart.module.css";
import Button from "../UI/Button"
import CartContext from '../../Store/Cart-context';

const BackDrop = (props) => {
    return (
        <Card className={classes.backdrop} onClick={props.onClick}></Card>
    )
}

const CartBox = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.items.reduce((currNumb, item) => {
        return currNumb + (parseFloat(item.amount) * parseFloat(item.price));
    }, 0)

    const reduceAmount_handler = (e) => {
        e.preventDefault();
        let itemId = e.target.parentElement.previousElementSibling.firstElementChild.textContent;
        cartCtx.removeCartItemHandler(itemId);
    }

    const increaseAmount_handler = (e) => {
        e.preventDefault();
        let itemId = e.target.parentElement.previousElementSibling.firstElementChild.textContent;
        cartCtx.addCartItemHandler(itemId);
    }
    return (
        <div className={classes.cartBox}>
            <div className={classes.items}>
                <ul className={classes.cartItemList}>
                    {cartCtx.items.length === 0 ? <p>No items yet</p> : cartCtx.items.map((item) => {
                        return <li key={item.id} className={classes.cartItem}>
                            <div>
                                <h4 hidden>{item.id}</h4>
                                <h4 className={classes.itemName}>{item.name}</h4>
                                <div className={classes.priceAndAmount}>
                                    <h4 className={classes.price}>${item.price}</h4>
                                    <h4 className={classes.amount}>x {item.amount}</h4>
                                </div>
                            </div>
                            <div>
                                <Button className={classes.changeAmountBtn} onClick={reduceAmount_handler}>-</Button>
                                <Button className={classes.changeAmountBtn} onClick={increaseAmount_handler}>+</Button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
            <div className={classes.total}>
                <h4>Total Amount</h4>
                <h4 className={classes.totalPrice}>${totalAmount.toFixed(2)}</h4>
            </div>
            <div className={classes.btns}>
                <Button className={classes.cancelBtn} onClick={props.cartClose}>Cancel</Button>
                <Button className={classes.orderBtn}>Order</Button>
            </div>
        </div>
    )
}

export default function Cart(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackDrop onClick={props.cartClose} />, document.getElementById("backdrop"))}
            {ReactDOM.createPortal(<CartBox cartClose={props.cartClose} />, document.getElementById("cart"))}
        </React.Fragment>
    )

}
