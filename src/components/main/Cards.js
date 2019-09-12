import React, { Component } from 'react'
import { Card, Col, Row } from 'react-materialize'
import { Link } from 'react-router-dom'

export default class Cards extends Component {
  state = {
    currentPage: 1,
    cardsPerPage: 10,
    cards: [
      {
        id: '1',
        nomeFantasia: 'Loja 01',
        codigoCliente: '0001-0001',
        nomeContato: 'Joao',
        telefone: '17 99548-7809',
        rota: ['Terça'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: 'Cadastro',
        situacao: ''
      },
      {
        id: '2',
        nomeFantasia: 'Loja 02',
        codigoCliente: '0001-0002',
        nomeContato: 'Carlos',
        telefone: '17 99548-7809',
        rota: ['Quarta', 'Sexta', 'Sábado'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: 'Alteração',
        situacao: ''
      },
      {
        id: '3',
        nomeFantasia: 'Loja 03',
        codigoCliente: '0001-0003',
        nomeContato: 'Pedro',
        telefone: '17 99548-7809',
        rota: ['Segunda', 'Quinta'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: 'Substituição',
        situacao: 'cadastrado'
      },
      {
        id: '4',
        nomeFantasia: 'Loja 04',
        codigoCliente: '0001-0004',
        nomeContato: 'Maria',
        telefone: '17 99548-7809',
        rota: ['Segunda', 'Quinta'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: 'Cadastro',
        situacao: 'cadastrado'
      },
      {
        id: '5',
        nomeFantasia: 'Loja 05',
        codigoCliente: '0001-0005',
        nomeContato: 'Zé',
        telefone: '17 99548-7809',
        rota: ['Segunda', 'Quinta'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: 'Cadastro',
        situacao: 'cadastrado'
      },
      {
        id: '6',
        nomeFantasia: 'Loja 06',
        codigoCliente: '0001-0006',
        nomeContato: 'Thiago',
        telefone: '17 99548-7809',
        rota: ['Segunda', 'Quinta'],
        canal: 'Bar A/B',
        timestamp: '25/04/2019 11:59',
        cadastroTipo: 'Alteração',
        situacao: 'cadastrado'
      }
    ]
  }

  handleClick = (e) => {
    this.setState({ currentPage: parseInt(e.target.id) })
    window.scrollTo(0, 0)
  }

  render() {

    const { currentPage, cardsPerPage, cards } = this.state

    const indexOfLastCard = currentPage * cardsPerPage
    const indexOfFirstCard = indexOfLastCard - cardsPerPage
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard)

    const renderCards = currentCards.map(card => {
      return (
        <Link
          to={'/cadastro/' + card.id}
          key={card.id}
        >
          <Col l={4} m={6} s={12}>
            <Card
              className={card.situacao ? "green lighten-5" : "grey lighten-5"}
              title={card.nomeFantasia + " - " + card.cadastroTipo}>
              <p>Código: {card.codigoCliente}</p>
              <p>Contato: {card.nomeContato}</p>
              <p>Telefone: {card.telefone}</p>
              <p>Rotas: {card.rota.map((card, index, array) => (array.length > 1 && index + 1 < array.length) ? card + ", " : card)}</p>
              <p>Canal: {card.canal}</p>
              <span className={card.situacao ? "green-text text-darken-1 right" : "grey-text text-darken-1 right"}>{card.timestamp}</span>
            </Card>
          </Col>
        </Link>
      )
    })

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
      pageNumbers.push(i)
    }

    const renderpageNumbers = pageNumbers.map(number => {
      const activePage = number === currentPage ? "active green" : "waves-effect"      
      return (
        <li
          key={number}
          id={number}
          className={activePage}
        >
          <Link
            to="/"
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </Link>
        </li>
      )
    })

    return (
      <div>
        <Row>
          {renderCards}
        </Row>
        <div className="center">
          <ul className="pagination">
            {renderpageNumbers}
          </ul>
        </div>
      </div>
    )
  }
}