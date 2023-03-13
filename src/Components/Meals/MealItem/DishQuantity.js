import React, { useState } from 'react'
import Button from '../../UI/Button'
import classes from "./DishQuantity.module.css"
import Input from '../../UI/Input';

export default function DishQuantity() {
    const [quantity, setQuantity] = useState(1);
    const quantity_handler = (e) => {
        setQuantity(e.target.value);
    }

    const quantityAdding_handler = (e) => {
        e.preventDefault();
    }
    return (
        <form className={classes.quantityForm} onSubmit={quantityAdding_handler}>
            <Input label="Amount" input={{
                id: "amount",
                name: "amount",
                type: "number",
                value: quantity,
                onChange: quantity_handler,
                min: 1,
                max: 5
            }} />
            <Button type="submit" className={classes.quantityBtn}>+ Add</Button>
        </form>
    )
}
