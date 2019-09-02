import React, { Component } from 'react'
import Register from './Register'
import Alteration from './Alteration'
import Substituition from './Substituition'
import RegisterCPF from './RegisterCPF'
import fetchJsonp from 'fetch-jsonp'

export default class NewRegister extends Component {
  state = {
    type: 'Cadastro',
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
      const { value } = e.target
      let dadosCnpj = this.getCnpj(value)
      console.log(dadosCnpj)
    }
    
    if (e.target.id === 'rota') {
        let options = e.target.options;
        let value = []
        for (let i = 0, l = options.length; i < l; i++) {
          if (options[i].selected && options[i].value !== '') {
            value.push(options[i].value)
          }
        }
      
      this.setState({
        [e.target.id]: value
      })
    } else {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  }

  getCnpj = (cnpj) => {
    fetchJsonp('https://www.receitaws.com.br/v1/cnpj/' + cnpj)
      .then((response) => {
        return response.json()
      }).then((dadosCnpj) => {
        console.log(dadosCnpj)
      })
  }
  
  form = <Register handleChange={this.handleChange} />

  handleClick = (e) => {
    switch (e.target.id) {
      case 'cadastro':
        this.setState({
          type: 'Cadastro'
        })
        this.form = <Register handleChange={this.handleChange} />
        break    
      case 'alteracao':
        this.setState({
          type: 'Alteração'
        })
        this.form = <Alteration handleChange={this.handleChange} />
        break      
      case 'substituicao':
        this.setState({
          type: 'Substituição'
        })
        this.form = <Substituition handleChange={this.handleChange} />
        break       
      case 'cpf':
        this.setState({
          type: 'Cadastro de CPF'
        })
        this.form = <RegisterCPF handleChange={this.handleChange} />
        break      
      default:
        return null
    }
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
            {this.form}
            <div className="center">
              <button className="btn waves-effect waves-light" type="submit" name="action">Enviar</button>
          </div>
        </form>
      </div>
    )
  }
}
