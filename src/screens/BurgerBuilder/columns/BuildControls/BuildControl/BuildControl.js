import React from 'react'
import cs from './BuildControl.module.css'

const BuildControl = (props) => {
    return (
        <div className={cs.BuildControl}>
            <p className={cs.Label}>{props.ingredient}</p>
            <div>
                <button 
                    className={cs.Reduce}
                    onClick={props.removeIngredient}
                    disabled={props.disabled}>-</button>
                <button 
                    className={cs.Add}
                    onClick={props.addIngredient}
                    >+</button>
            </div>
        </div>
    )
}

export default BuildControl
