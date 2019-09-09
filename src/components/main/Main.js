import React from 'react'
import ButtonRegister from './ButtonRegister'
import { Card, Col, Pagination, Row } from "react-materialize";

export default function Main() {
  return (
    <div>
      <Row>
        <Col m={4} s={12}>
          <Card
            className="grey lighten-5"
            title="Loja 01 - Cadastro">
            <p>Código: 0001-0025</p>
            <p>Contato: João</p>
            <p>Telefone: 17 99785-5871</p>
            <p>Rotas: Segunda, Terça</p>
            <p>Canal: Bar CD</p>
            <span className="grey-text text-darken-1 right">26/04/2019 11:59</span>
          </Card>
        </Col>
        <Col m={4} s={12}>
          <Card
            className="grey lighten-5"
            title="Loja 02 - Alteração">
            <p>Código: 0001-0025</p>
            <p>Contato: João</p>
            <p>Telefone: 17 99785-5871</p>
            <p>Rotas: Segunda, Terça</p>
            <p>Canal: Bar CD</p>
            <span className="grey-text text-darken-1 right">25/04/2019 10:28</span>
          </Card>
        </Col>
        <Col m={4} s={12}>
          <Card
            className="grey lighten-5"
            title="Loja 03 - CPF">
            <p>Código: 0001-0025</p>
            <p>Contato: João</p>
            <p>Telefone: 17 99785-5871</p>
            <p>Rotas: Segunda, Terça</p>
            <p>Canal: Bar CD</p>
            <span className="grey-text text-darken-1 right">23/04/2019 15:16</span>
          </Card>
        </Col>
        <Col m={4} s={12}>
          <Card
            className="grey lighten-5"
            title="Loja 04 - Cadastro">
            <p>Código: 0001-0025</p>
            <p>Contato: João</p>
            <p>Telefone: 17 99785-5871</p>
            <p>Rotas: Segunda, Terça</p>
            <p>Canal: Bar CD</p>
            <span className="grey-text text-darken-1 right">31/03/2019 08:30</span>
          </Card>
        </Col>
        <Col m={4} s={12}>
          <Card
            className="green lighten-5"
            title="Loja 05 - Cadastro">
            <p>Código: 0001-0025</p>
            <p>Contato: João</p>
            <p>Telefone: 17 99785-5871</p>
            <p>Rotas: Segunda, Terça</p>
            <p>Canal: Bar CD</p>
            <span className="green-text text-darken-1 right">Cadastrado - 19/03/2019 12:30</span>
          </Card>
        </Col>
        <Col m={4} s={12}>
          <Card
            className="green lighten-5"
            title="Loja 06 - Cadastro">
            <p>Código: 0001-0025</p>
            <p>Contato: João</p>
            <p>Telefone: 17 99785-5871</p>
            <p>Rotas: Segunda, Terça</p>
            <p>Canal: Bar CD</p>
            <span className="green-text text-darken-1 right">Cadastrado - 19/03/2019 13:42</span>
          </Card>
        </Col>
      </Row>

      <div className="center">
        <ul className="pagination">
          <li className="active green"><a href="#!">1</a></li>
          <li className="waves-effect"><a href="#!">2</a></li>
          <li className="waves-effect"><a href="#!">3</a></li>
        </ul>
      </div>

      <ButtonRegister />
    </div>
  )
}