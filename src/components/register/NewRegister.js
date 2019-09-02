import React, { Component } from 'react'
import Register from './Register'
import Alteration from './Alteration'
import Substituition from './Substituition'
import RegisterCPF from './RegisterCPF'
import fetchJsonp from 'fetch-jsonp'

export default class NewRegister extends Component {
  state = {
    type: 'cadastro',
    cnpj: '',
    cpf: '',
    codigoCliente: '',
    nomeFantasia: '',
    rota: [],
    canal: '',
    nomeContato: '',
    telefone: '',
    email: '',
    cep: '',
    endereco: '',
    numeroEndereco: '',
    bairro: '',
    cidade: '',
    detalhes: ''
  }

  handleChange = (e) => {
    if (e.target.id === 'cnpj' && e.target.value.length === 14) {
      this.setState({ [e.target.id]: e.target.value })
      let dadosCnpj = this.getCnpj(e.target.value)
      dadosCnpj.then((res) => {
        this.setState({
          nomeFantasia: res.fantasia
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

  getCnpj = (cnpj) => {
    return fetchJsonp('https://www.receitaws.com.br/v1/cnpj/' + cnpj)
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
            <Register handleChange={this.handleChange} {...this.state} />
            <Alteration handleChange={this.handleChange} {...this.state} />
            <Substituition handleChange={this.handleChange} {...this.state} />
            <RegisterCPF handleChange={this.handleChange} {...this.state} />
            <div className="center">
              <button className="btn waves-effect waves-light" type="submit" name="action">Enviar</button>
          </div>
        </form>
      </div>
    )
  }
}
