import React from 'react'
import ButtonRegister from './ButtonRegister'
import Cards from './Cards'

export default function Main() {
  return (
    <div>
      
      <Cards />

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