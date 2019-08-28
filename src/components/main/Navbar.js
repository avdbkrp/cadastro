import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (

    <nav className="green">
      <div className="container">
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">Vendedor X</NavLink>
          <div className="right">
            <NavLink to="/" className="btn btn-floating white black-text z-depth-0">VX</NavLink>
          </div>
        </div>
      </div>
    </nav>

  )
}