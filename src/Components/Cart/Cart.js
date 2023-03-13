import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../UI/Card'
import classes from "./Cart.module.css";
import Button from "../UI/Button"

const CartBox = (props) => {
    const cartItems = [{
        id: "itm1",
        name: "Sushi",
        price: "22.99",
        amount: "2"
    }, {
        id: "itm2",
        name: "Schnitzel",
        price: "16.50",
        amount: "2"
    }]

    return (
        <Card className={classes.backdrop}>
            <div className={classes.cartBox}>
                <div className={classes.items}>
                    <ul className={classes.cartItemList}>
                        {cartItems.map((items) => {
                            return <li key={items.id} className={classes.cartItem}>{items.name}</li>
                        })}
                    </ul>
                </div>
                <div className={classes.total}>
                    <h4>Total Amount</h4>
                    <h4 className={classes.totalPrice}>$45.99</h4>
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
