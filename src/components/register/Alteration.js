import React from 'react'

export default function Alteration(props) {
    const { handleChange } = props

    return (
        <div className={(props.type === 'alteracao') ? null : 'hide'}>
            <h1>Alteração</h1>
        </div>
    )
}
