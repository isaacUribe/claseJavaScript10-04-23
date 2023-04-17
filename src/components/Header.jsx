import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h1>Este es el header</h1>
        <Link to={'/'} className='link'>Home</Link>
        <Link to={'formulario'} className='link'>Formulario</Link>
    </div>
  )
}

export default Header