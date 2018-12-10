import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './app'
const AlunoModule = React.lazy(() => import('./aluno/app'))
const AdminModule = React.lazy(() => import('./admin/app'))
const ProfessorModule = React.lazy(() => import('./professor/app'))

export default (props) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Suspense fallback={<div>Loading...</div>}>
        <Route path='/aluno' component={AlunoModule} />
        <Route path='/admin' component={AdminModule} />
        <Route path='/professor' component={ProfessorModule} />
      </Suspense>
    </Switch>
  </BrowserRouter>
)