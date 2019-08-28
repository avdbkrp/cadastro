import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './components/main/Main'
import Navbar from './components/main/Navbar'
import NewRegister  from './components/register/NewRegister'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path="/register" component={NewRegister} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
