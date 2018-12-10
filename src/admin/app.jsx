import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from '../componentes/header'
import Sidebar from '../componentes/sidebar'
import Dashboard from './dashboard'
import Alunos from './alunos'

export default (props) => (
  <BrowserRouter>
    <div>
      <Route component={Header} />
      <Route component={Sidebar} />
      <Route exact path='/admin' component={Dashboard} />
      <Route path='/admin/alunos' component={Alunos} />
    </div>
  </BrowserRouter>
)