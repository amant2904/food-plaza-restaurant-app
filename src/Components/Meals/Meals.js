import React, { Fragment } from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
import Cart from '../Cart/Cart'

export default function Meals() {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
            <Cart />
        </Fragment>
    )
}
