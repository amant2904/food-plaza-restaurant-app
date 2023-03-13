import React from 'react'
import SpecificDish from './SpecificDish'
import classes from "./AvailableMeals.module.css"

export default function AvailableMeals() {
    const dishes = [{
        name: "Sushi",
        descr: "Finest Fish and Veggies",
        price: "22.99"
    }, {
        name: "Schnitzel",
        descr: "A German Speciality",
        price: "16.50"
    }, {
        name: "Barbecue Burger",
        descr: "American, raw, meaty",
        price: "12.99"
    }, {
        name: "Green Bowl",
        descr: "Healthy...And Green...",
        price: "10.99"
    }, {
        name: "Venenatis",
        descr: "An Italian dish",
        price: "12.45"
    }, {
        name: "Lacus",
        descr: "Delicious and Tasty",
        price: "15.50"
    }]

    return (
        <div className={classes.availableMeals}>
            <ul>
                {dishes.map((dish) => {
                    return <SpecificDish key={Math.random()} name={dish.name} descr={dish.descr} price={dish.price} />
                })}
            </ul>
        </div>
    )
}
