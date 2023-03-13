import React, { Fragment } from 'react'
import classes from "./SpecificDish.module.css"
import DishQuantity from './DishQuantity'

export default function SpecificDish(props) {
    return (
        <Fragment>
            <li className={classes.mealItem}>
                <div>
                    <h3 className={classes.dishName}>{props.name}</h3>
                    <p className={classes.descr}>{props.descr}</p>
                    <p hidden>{props.id}</p>
                    <p className={classes.price}>${props.price}</p>
                </div>
                <div>
                    <DishQuantity />
                </div>
            </li>
        </Fragment>
    )
}
