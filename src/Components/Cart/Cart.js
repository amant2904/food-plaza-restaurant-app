import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../UI/Card'
import classes from "./Cart.module.css";
import Button from "../UI/Button"

const Cart = () => {
    return (
        <Card className={classes.backdrop}>
            <div className={classes.cartBox}>
                <div className={classes.items}>
                    <p>No Items Added Yet</p>
                </div>
                <div className={classes.total}>
                    <h4>Total Amount</h4>
                    <h4 className={classes.totalPrice}>$45.67</h4>
                </div>
                <div className={classes.btns}>
                    <Button className={classes.cancelBtn}>Cancel</Button>
                    <Button className={classes.orderBtn}>Order</Button>
                </div>
            </div>
        </Card>
    )
}

export default function CartBox() {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Cart />, document.getElementById("cart"))}
        </React.Fragment>
    )

}
