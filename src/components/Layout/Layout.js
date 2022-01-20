import React from 'react'
import NavBar from '../NavBar/NavBar'

const Layout = (props) => {
    return (
        <div>
            <div>
                <NavBar />
            </div>

            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout
