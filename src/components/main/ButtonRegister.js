import React from 'react'
import { Link } from 'react-router-dom'

export default function ButtonRegister() {
    return (

        <div className="fixed-action-btn">
            <Link to="/novo" className="btn-floating btn-large green waves-effect waves-light">+</Link>
        </div>

    )
}