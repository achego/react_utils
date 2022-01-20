import React from 'react'
import cs from './NavBar.module.css'

const NavBar = () => {
    return (
        <div 
            className={cs.NavBar}
            style={{
                '--color': 'red'
            }}>
            NavBar
        </div>
    )
}

export default NavBar
