import React from 'react'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import cs from './Burger.module.css'

const Burger = (props) => {
    let ingredients = []

    for (let ingr in props.ingredients){
        for (let i=0; i < props.ingredients[ingr]; i++){
            ingredients.push(<BurgerIngredients type={ingr}
            key={ingr + i} />)
        }   
    }

    if (ingredients.length === 0){
        ingredients = <p>Start adding your ingredients</p>
    }

    return (
        <div className={cs.Burger}>
            <BurgerIngredients type='bread-top'/>
                {ingredients}
            <BurgerIngredients type='bread-bottom'/>
        </div>
    )
}

export default Burger
