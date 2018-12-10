import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <div>
    <p>DASHBOARD</p>
    <Link to='/admin/alunos'>ver alunos</Link>
  </div>
)