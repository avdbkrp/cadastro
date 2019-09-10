import React, { Component } from 'react'
import { Card, Col, Row } from "react-materialize"

export default class Cards extends Component {
  state = {
    cards: [
      {
        id: '1',
        nomeFantasia: 'Loja 01',
        codigoCliente: '0001-0001',
        nomeContato: 'Joao',
        telefone: '17 99548-7809',
        rota: ['Segunda', 'Quinta'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: '',
        situacao: ''
      },
      {
        id: '2',
        nomeFantasia: 'Loja 01',
        codigoCliente: '0001-0002',
        nomeContato: 'Carlos',
        telefone: '17 99548-7809',
        rota: ['Segunda', 'Quinta'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: '',
        situacao: ''
      },
      {
        id: '3',
        nomeFantasia: 'Loja 01',
        codigoCliente: '0001-0003',
        nomeContato: 'Pedro',
        telefone: '17 99548-7809',
        rota: ['Segunda', 'Quinta'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: '',
        situacao: 'cadastrado'
      },
      {
        id: '4',
        nomeFantasia: 'Loja 01',
        codigoCliente: '0001-0004',
        nomeContato: 'Maria',
        telefone: '17 99548-7809',
        rota: ['Segunda', 'Quinta'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: '',
        situacao: 'cadastrado'
      },
      {
        id: '5',
        nomeFantasia: 'Loja 01',
        codigoCliente: '0001-0005',
        nomeContato: 'Zé',
        telefone: '17 99548-7809',
        rota: ['Segunda', 'Quinta'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: '',
        situacao: 'cadastrado'
      },
      {
        id: '6',
        nomeFantasia: 'Loja 01',
        codigoCliente: '0001-0006',
        nomeContato: 'Thiago',
        telefone: '17 99548-7809',
        rota: ['Segunda', 'Quinta'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: '',
        situacao: 'cadastrado'
      }
    ]
  }

  render() {
    return (
      <Row>
        {this.state.cards.map(card => {
          return (
            <Col l={4} m={6} s={12} key={card.id}>
              <Card
                className={card.situacao ? "green lighten-5" : "grey lighten-5"}
                title="Loja 01 - Cadastro">
                <p>Código: {card.codigoCliente}</p>
                <p>Contato: {card.nomeContato}</p>
                <p>Telefone: {card.telefone}</p>
                <p>Rotas: {card.rota[0] + ", " + card.rota[1]}</p>
                <p>Canal: {card.canal}</p>
                <span className={card.situacao ? "green-text text-darken-1 right" : "grey-text text-darken-1 right"}>{card.timestamp}</span>
              </Card>
            </Col>
          )
        })}
      </Row>
    )
  }
}