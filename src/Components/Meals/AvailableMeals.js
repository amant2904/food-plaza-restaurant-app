import React from 'react'
import SpecificDish from './MealItem/SpecificDish'
import classes from "./AvailableMeals.module.css"

export default function AvailableMeals() {
    const dishes = [{
        id: "m1",
        name: "Sushi",
        descr: "Finest Fish and Veggies",
        price: "22.99"
    }, {
        id: "m2",
        name: "Schnitzel",
        descr: "A German Speciality",
        price: "16.50"
    }, {
        id: "m3",
        name: "Barbecue Burger",
        descr: "American, raw, meaty",
        price: "12.99"
    }, {
        id: "m4",
        name: "Green Bowl",
        descr: "Healthy...And Green...",
        price: "10.99"
    }, {
        id: "m5",
        name: "Venenatis",
        descr: "An Italian dish",
        price: "12.45"
    }, {
        id: "m6",
        name: "Lacus",
        descr: "Delicious and Tasty",
        price: "15.50"
    }]

    return (
        <div className={classes.availableMeals}>
            <ul>
                {dishes.map((dish) => {
                    return <SpecificDish key={dish.id} id={dish.id} name={dish.name} descr={dish.descr} price={dish.price} />
                })}
            </ul>
        </div>
    )
}
