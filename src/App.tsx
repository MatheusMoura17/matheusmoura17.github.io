import React from 'react'
import { Router, Switch } from 'wouter'

import Home from './Pages/Home'

export const routes = {
  home: '/'
}

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Home path={routes.home} />
      </Switch>
    </Router>)
}

export default App;