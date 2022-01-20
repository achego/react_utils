import React from 'react'
import cs from './OrderSummary.module.css'

const OrderSummary = (props) => {

    const ingredients = []
    for (const ingr in props.ingredients) {
        ingredients.push(<li>
            {ingr} : <span>{props.ingredients[ingr]}</span>
        </li>)
    }

    return (
        <div className={cs.OrderSummary}>
            <h2>Your Order</h2>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {ingredients}
            </ul>
            <p>Continue to Checkout ?</p>
        </div>
    )
}

export default OrderSummary
