import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import Card from '../UI/Card'
import classes from "./Cart.module.css";
import Button from "../UI/Button"
import CartContext from '../../Store/Cart-context';

const CartBox = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.items.reduce((currNumb, item) => {
        return currNumb + (parseFloat(item.amount) * parseFloat(item.price));
    }, 0)

    return (
        <Card className={classes.backdrop}>
            <div className={classes.cartBox}>
                <div className={classes.items}>
                    <ul className={classes.cartItemList}>
                        {cartCtx.items.map((item) => {
                            return <li key={item.id} className={classes.cartItem}>{item.name} {item.amount} {(item.price * item.amount).toFixed(2)}</li>
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
        </Card>
    )
}

export default function Cart(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<CartBox cartClose={props.cartClose} />, document.getElementById("cart"))}
        </React.Fragment>
    )

}
