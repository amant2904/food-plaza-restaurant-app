import React, { useContext, useState } from 'react'
import Button from '../../UI/Button'
import classes from "./DishQuantity.module.css"
import Input from '../../UI/Input';
import CartContext from '../../../Store/Cart-context';


export default function DishQuantity() {
    const cartCtx = useContext(CartContext);

    const [quantity, setQuantity] = useState(1);
    const quantity_handler = (e) => {
        setQuantity(e.target.value);
    }

    const quantityAdding_handler = (e) => {
        e.preventDefault();
        const itemName = e.target.parentElement.parentElement.firstElementChild.firstElementChild.textContent;
        const itemPrice = e.target.parentElement.parentElement.firstElementChild.lastElementChild.textContent.slice(1);
        const itemId = e.target.parentElement.parentElement.firstElementChild.children[2].textContent;

        cartCtx.addCartItemHandler({
            id: itemId,
            name: itemName,
            amount: parseFloat(quantity),
            price: itemPrice
        })
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
