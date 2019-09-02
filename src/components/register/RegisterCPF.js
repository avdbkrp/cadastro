import React from 'react'

export default function RegisterCPF(props) {
  const { handleChange } = props

  return (
    <div className={(props.type === 'cpf') ? null : 'hide'}>
      <h1>CPF</h1>
    </div>
  )
}
