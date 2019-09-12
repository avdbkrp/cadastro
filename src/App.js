import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './components/main/Main'
import Navbar from './components/main/Navbar'
import NewRegister  from './components/register/NewRegister'
import RegisterDetails from './components/main/RegisterDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/novo" component={NewRegister} />
          <Route path="/cadastro/:id" component={RegisterDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
