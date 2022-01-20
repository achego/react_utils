import React, { useState } from 'react'
import BuildControls from './columns/BuildControls/BuildControls'
import Burger from './columns/Burger/Burger'
import OrderSummary from './columns/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.4,
    cheese: 1.3,
    meat: 0.7,
}


const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    })

    const [totalPrice, settotalPrice] = useState(4)

    const addIngredient = (type) => {
        const newIngr = ingredients
        newIngr[type] = ingredients[type] + 1
        setIngredients(newIngr)
        settotalPrice(totalPrice + INGREDIENT_PRICES[type])
    }
    const removeIngredient = (type) => {
        if (ingredients[type] <= 0){
            return
        }
        const newIngr = ingredients
        newIngr[type] = ingredients[type] - 1
        setIngredients(newIngr)
        settotalPrice(totalPrice - INGREDIENT_PRICES[type])
    }

    return (
        <div>
            {/* <OrderSummary ingredients={ingredients}/> */}
            <Burger ingredients={ingredients}/>
            <BuildControls 
                ingredients={ingredients}
                addIngredient={addIngredient}
                removeIngredient={removeIngredient}
                totalPrice={totalPrice}
                />
        </div>
    )
}

export default BurgerBuilder
