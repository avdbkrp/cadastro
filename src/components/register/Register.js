import React from 'react'

export default function Register(props) {
  const { handleChange } = props

  return (
    <div className={(props.type === 'cadastro') ? null : 'hide'}>
        <div className="input-field">
          <label htmlFor="cnpj">CNPJ</label>
          <input type="text" id="cnpj" onChange={handleChange} value={props.cnpj} />
        </div>
        <div className="red-text">{(props.errorMessage ? props.errorMessage : null)}</div>
        <div className="input-field">
          <label htmlFor="razaoSocial">Razão Social</label>
          <input type="text" id="razaoSocial" onChange={handleChange} value={props.razaoSocial} />
        </div>
        <div className="input-field">
          <label htmlFor="nomeFantasia">Nome Fantasia</label>
          <input type="text" id="nomeFantasia" onChange={handleChange} value={props.nomeFantasia} />
        </div>
        <label htmlFor="rota">Rota</label>
        <div className="input-field col s12">
          <select id="rota" className="browser-default" multiple defaultValue={[""]} onChange={handleChange}>
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
          <select id="canal" className="browser-default" defaultValue="" onChange={handleChange}>
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
          <input type="email" id="email" onChange={handleChange} value={props.email} />
        </div>
        <div className="input-field">
          <label htmlFor="endereco">Endereço</label>
          <input type="text" id="endereco" onChange={handleChange} value={props.endereco} />
        </div>
        <div className="input-field">
          <label htmlFor="cep">CEP</label>
          <input type="text" id="cep" onChange={handleChange} value={props.cep} />
        </div>
        <div className="input-field">
          <label htmlFor="complemento">Complemento</label>
          <input type="text" id="complemento" onChange={handleChange} value={props.complemento} />
        </div>
        <div className="input-field">
          <label htmlFor="numeroEndereco">Número</label>
          <input type="text" id="numeroEndereco" onChange={handleChange} value={props.numeroEndereco} />
        </div>
        <div className="input-field">
          <label htmlFor="bairro">Bairro</label>
          <input type="text" id="bairro" onChange={handleChange} value={props.bairro} />
        </div>
        <div className="input-field">
          <label htmlFor="cidade">Município</label>
          <input type="text" id="cidade" onChange={handleChange} value={props.cidade} />
        </div>
    </div>
  )
}
