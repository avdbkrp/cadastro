import React from 'react'
import { Textarea, TextInput, Select } from 'react-materialize'

export default function CpfRegister(props) {
  const { handleChange } = props

  return (
    <div>
      <TextInput
        label="CPF"
        id="cpf"
        onChange={handleChange}
        value={props.cpf}
        required
      />

      <TextInput
        label="Nome"
        id="codigoCliente"
        onChange={handleChange}
        value={props.codigoCliente}
        required
      />

      <TextInput
        label="Nome Fantasia"
        id="nomeFantasia"
        onChange={handleChange}
        value={props.nomeFantasia}
        required
      />

      <Select label="Selecione a rota" id="rota" multiple defaultValue={[""]} onChange={handleChange} required>
        <option>Segunda</option>
        <option>Terça</option>
        <option>Quarta</option>
        <option>Quinta</option>
        <option>Sexta</option>
        <option>Sábado</option>
      </Select>

      <Select label="Selecione o canal" id="canal" defaultValue={""} onChange={handleChange} required>
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

      <TextInput
        label="Endereço"
        id="endereco"
        onChange={handleChange}
        value={props.endereco}
        required
      />

      <TextInput
        label="CEP"
        id="cep"
        onChange={handleChange}
        value={props.cep}
        required
      />

      <TextInput
        label="Complemento"
        id="complemento"
        onChange={handleChange}
        value={props.complemento}
      />

      <TextInput
        label="Número"
        id="numeroEndereco"
        onChange={handleChange}
        value={props.numeroEndereco}
        required
      />

      <TextInput
        label="Bairro"
        id="bairro"
        onChange={handleChange}
        value={props.bairro}
        required
      />

      <TextInput
        label="Cidade"
        id="cidade"
        onChange={handleChange}
        value={props.cidade}
        required
      />

      <Textarea
        label="Outros detalhes"
        data-length={120}
      />
    </div>
  )
}
