import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <Fragment>
    <h1>Bem Vindo ao Simulavest</h1>
    <Link to='/aluno'>Entrar como aluno</Link>
    <br/>
    <Link to='/admin'>Entrar como administrador</Link>
    <br/>
    <Link to='/professor'>Entrar como professor</Link>
  </Fragment>
)