import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './components/main/Main'
import Navbar from './components/main/Navbar'
import NewRegister  from './components/register/NewRegister'
import Cards from './components/main/Cards'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/register" component={NewRegister} />
          <Route path="/new" component={Cards} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
