import React, { Component } from 'react'
import Register from './Register'
import Change from "./Change"
import Replace from "./Replace"
import CpfRegister from "./CpfRegister"
import fetchJsonp from 'fetch-jsonp'

export default class NewRegister extends Component {
  state = {
    type: 'cadastro',
    cnpj: '',
    cpf: '',
    codigoCliente: '',
    razaoSocial: '',
    nomeFantasia: '',
    rota: [],
    canal: '',
    nomeContato: '',
    telefone: '',
    email: '',
    cep: '',
    endereco: '',
    numeroEndereco: '',
    complemento: '',
    bairro: '',
    cidade: '',
    detalhes: '',
    situacao: '',
    errorMessage: ''
  }

  handleChange = (e) => {
    if (e.target.id === 'cnpj' && e.target.value.length === 14) {
      this.setState({ [e.target.id]: e.target.value })
      let dadosCnpj = this.getCnpj(e.target.value)
      dadosCnpj.then((res) => {
        if (res.status === 'ERROR') {
          return this.setState({ errorMessage: res.message })
        } else if (res.situacao !== 'ATIVA') {
          this.setState({ errorMessage: res.situacao })
        } else {
          this.setState({ errorMessage: null })
        }
        this.setState({
          razaoSocial: res.nome,
          nomeFantasia: res.fantasia,
          telefone: res.telefone,
          email: res.email,
          endereco: res.logradouro,
          complemento: res.complemento,
          numeroEndereco: res.numero,
          bairro: res.bairro,
          cidade: res.municipio,
          cep: res.cep,
          situacao: res.situacao
        })
      })
    } else if (e.target.id === 'rota') {
        let options = e.target.options;
        let value = []
        for (let i = 0, l = options.length; i < l; i++) {
          if (options[i].selected && options[i].value !== '') {
            value.push(options[i].value)
          }
        }
      this.setState({ [e.target.id]: value })
    } else {
      this.setState({ [e.target.id]: e.target.value })
    }
  }

  getCnpj = async (cnpj) => {
    return await fetchJsonp('https://www.receitaws.com.br/v1/cnpj/' + cnpj)
      .then((response) => {
        return response.json()
      })
  }

  handleClick = (e) => {
    this.setState({ type: e.target.id })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className="container">
        <h4 className="center">Novo Cadastro</h4>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              <input id="cadastro" name="group1" type="radio" defaultChecked onClick={this.handleClick}/>
              <span>Cadastro</span>
            </label>
          </p>
          <p>
            <label>
              <input id="alteracao" name="group1" type="radio" onClick={this.handleClick}/>
              <span>Alteração</span>
            </label>
          </p>
          <p>
            <label>
              <input id="substituicao" name="group1" type="radio" onClick={this.handleClick}/>
              <span>Substituição</span>
            </label>
          </p>
          <p>
            <label>
              <input id="cpf" name="group1" type="radio" onClick={this.handleClick}/>
              <span>Cadastro CPF</span>
            </label>
          </p>
          { this.state.type === 'cadastro' && <Register handleChange={this.handleChange} {...this.state} /> }
          { this.state.type === 'alteracao' && <Change handleChange={this.handleChange} {...this.state} /> }
          { this.state.type === 'substituicao' && <Replace handleChange={this.handleChange} {...this.state} /> }
          { this.state.type === 'cpf' && <CpfRegister handleChange={this.handleChange} {...this.state} /> }
          <div className="center">
            <button
              className={(this.state.situacao === 'ATIVA' && !this.state.errorMessage) ? 'btn waves-effect waves-light' : 'btn waves-effect waves-light disabled'}
              type="submit"
              name="action">
              Enviar
            </button>
          </div>
        </form>
      </div>
    )
  }
}
