import React, { Component } from 'react'
import Register from './Register'
import Alteration from './Alteration'
import Substituition from './Substituition'
import RegisterCPF from './RegisterCPF'

export default class NewRegister extends Component {
  state = {
    type: 'Cadastro',
    cnpj: '',
    cpf: '',
    codigoCliente: '',
    nomeFantasia: '',
    rota: '',
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
    this.setState({
      [e.target.id]: e.target.value
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