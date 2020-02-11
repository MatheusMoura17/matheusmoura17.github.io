import React from 'react'
import { Router, Switch } from 'wouter'

import Home from './pages/Home'
import Project from './pages/Project'

export const routes = {
  home: '/',
  project: '/project/:projectName',
}

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Home path={routes.home} />
        <Project path={routes.project} />
      </Switch>
    </Router>
  )
}

export default App
