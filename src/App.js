import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ButtonRegister from './components/ButtonRegister'
import NewRegister  from './components/NewRegister'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ButtonRegister />
        <Route path="/register" component={NewRegister} />
      </div>
    </BrowserRouter>
  )
}

export default App
