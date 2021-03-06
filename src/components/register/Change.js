import React from 'react'
import { Textarea, TextInput, Select } from 'react-materialize'

export default function Change(props) {
  const { handleChange } = props

  return (
    <div>
      <TextInput
        label="CNPJ"
        id="cnpj"
        onChange={handleChange}
        value={props.cnpj}
        required
        minLength="14"
        maxLength="14"
        error="CNPJ Inválido"
        data-length={14}
        validate
      />
      <div className="red-text">{(props.errorMessage ? props.errorMessage : null)}</div>

      <TextInput
        label="Código do Cliente"
        id="codigoCliente"
        onChange={handleChange}
        value={props.codigoCliente}
        required
      />

      <TextInput
        label="Razão Social"
        id="razaoSocial"
        onChange={handleChange}
        value={props.razaoSocial}
      />

      <TextInput
        label="Nome Fantasia"
        id="nomeFantasia"
        onChange={handleChange}
        value={props.nomeFantasia}
      />

      <Select label="Selecione a rota" id="rota" multiple defaultValue={[""]} onChange={handleChange}>
        <option>Segunda</option>
        <option>Terça</option>
        <option>Quarta</option>
        <option>Quinta</option>
        <option>Sexta</option>
        <option>Sábado</option>
      </Select>

      <Select label="Selecione o canal" id="canal" defaultValue={""} onChange={handleChange}>
        <option value="" disabled>Selecione o canal</option>
        <option>Bar A/B</option>
        <option>Bar C/D</option>
        <option>Choperia</option>
        <option>Restaurante</option>
        <option>Depósito de Bebidas</option>
        <option>Supermercado</option>
      </Select>

      <TextInput
        label="Nome de Contato"
        id="nomeContato"
        onChange={handleChange}
        value={props.nomeContato}
      />

      <TextInput
        label="Telefone"
        id="telefone"
        onChange={handleChange}
        value={props.telefone}
      />

      <TextInput
        label="e-mail"
        id="email"
        onChange={handleChange}
        value={props.email}
        email
        validate
      />

      <Textarea
        label="Outros detalhes"
        data-length={120}
      />
    </div>
  )
}
