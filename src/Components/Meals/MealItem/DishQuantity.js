import React, { useState } from 'react'
import Button from '../../UI/Button'
import classes from "./DishQuantity.module.css"

export default function DishQuantity() {
    const [quantity, setQuantity] = useState(0);
    const quantity_handler = (e) => {
        setQuantity(e.target.value);
    }

    const quantityAdding_handler = (e) => {
        e.preventDefault();
    }
    return (
        <form className={classes.quantityForm} onSubmit={quantityAdding_handler}>
            <div>
                <label htmlFor="quantity">Amount</label>
                <input type="number" name="quantity" id="quantity" onChange={quantity_handler} value={quantity} />
            </div>
            <Button type="submit" className={classes.quantityBtn}>+Add</Button>
        </form>
    )
}
