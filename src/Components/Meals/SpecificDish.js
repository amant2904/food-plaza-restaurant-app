import React, { Fragment } from 'react'
import classes from "./SpecificDish.module.css"

export default function SpecificDish(props) {
    return (
        <Fragment>
            <h3 className={classes.dishName}>{props.name}</h3>
            <p className={classes.descr}>{props.descr}</p>
            <p className={classes.price}>${props.price}</p>
            <hr />
        </Fragment>
    )
}
