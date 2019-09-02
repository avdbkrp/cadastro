import React from 'react'

export default function Register(props) {
  const { handleChange } = props

  return (
    <div className={(props.type === 'cadastro') ? null : 'hide'}>
        <div className="input-field">
          <label htmlFor="cnpj">CNPJ</label>
          <input type="text" id="cnpj" onChange={handleChange} value={props.cnpj} />
        </div>
        <div className="input-field">
          <label htmlFor="nomeFantasia">Nome Fantasia</label>
          <input type="text" id="nomeFantasia" onChange={handleChange} value={props.nomeFantasia} />
        </div>
        <label htmlFor="rota">Rota</label>
        <div className="input-field col s12">
          <select id="rota" className="browser-default" multiple defaultValue={[""]}>
            <option value="" disabled>Selecione a rota</option>
            <option>Segunda</option>
            <option>Terça</option>
            <option>Quarta</option>
            <option>Quinta</option>
            <option>Sexta</option>
            <option>Sábado</option>
          </select>
        </div>
        <label htmlFor="canal">Canal</label>
        <div className="input-field col s12">
          <select id="canal" className="browser-default" defaultValue="">
            <option value="" disabled>Selecione o canal</option>
            <option>Bar A/B</option>
            <option>Bar C/D</option>
            <option>Choperia</option>
            <option>Restaurante</option>
            <option>Depósito de Bebidas</option>
            <option>Supermercado</option>
          </select>
        </div>
        <div className="input-field">
          <label htmlFor="nomeContato">Nome de Contato</label>
          <input type="text" id="nomeContato" onChange={handleChange} value={props.nomeContato} />
        </div>
        <div className="input-field">
          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="telefone" onChange={handleChange} value={props.telefone} />
        </div>
        <div className="input-field">
          <label htmlFor="email">e-mail</label>
          <input type="text" id="email" onChange={handleChange} value={props.email} />
        </div>
    </div>
  )
}
