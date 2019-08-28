import React from 'react'

export default function Register(props) {
  const { handleChange } = props

  return (
    <div className="container" onChange={handleChange}>
        <div className="input-field">
          <label htmlFor="cnpj">CNPJ</label>
          <input type="text" id="cnpj" />
        </div>
        <div className="input-field">
          <label htmlFor="nomeFantasia">Nome Fantasia</label>
          <input type="text" id="nomeFantasia" />
        </div>
        <div className="input-field">
          <label htmlFor="nomeContato">Nome de Contato</label>
          <input type="text" id="nomeContato" />
        </div>
        <div className="input-field">
          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="telefone" />
        </div>
        <div className="input-field">
          <label htmlFor="email">e-mail</label>
          <input type="text" id="email" />
        </div>
    </div>
  )
}