import React from 'react'

export default function Substituition(props) {
    const { handleChange } = props

    return (
        <div className={(props.type === 'substituicao') ? null : 'hide'}>
            <h1>Substituição</h1>
        </div>
    )
}
