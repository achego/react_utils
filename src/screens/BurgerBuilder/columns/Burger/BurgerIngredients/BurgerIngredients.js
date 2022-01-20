import React from 'react'
import cs from './BurgerIngredients.module.css'
import PropTypes from 'prop-types'

const BurgerIngredients = (props) => {

    let ingredient = null

    switch (props.type) {
        case 'bread-top':
            ingredient = <div className={cs.bread_top}>
                <div className={cs.seed1}></div>
                <div className={cs.seed2}></div>
            </div>
            break;
        case 'bread-bottom':
            ingredient = <div className={cs.bread_bottom}></div>
            break;
        case 'cheese':
            ingredient = <div className={cs.cheese}></div>
            break;
        case 'meat':
            ingredient = <div className={cs.meat}></div>
            break;
        case 'bacon':
            ingredient = <div className={cs.bacon}></div>
            break;
        case 'salad':
            ingredient = <div className={cs.salad}></div>
            break;
    
        default:
            ingredient = null
            break;
    }

    return ingredient
}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients
