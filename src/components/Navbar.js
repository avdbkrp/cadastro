import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (

        <nav>
            <div className="container">
                <div className="nav-wrapper">
                    <NavLink to="/" className="brand-logo">Vendedor X</NavLink>
                    <div className="right">
                        <NavLink to="/" className="btn-floating btn-large green">VX</NavLink>
                    </div>
                </div>
            </div>
        </nav>

    )
}