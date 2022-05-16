import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {cerrarSesionUsuario} from '../redux/UsuarioDuck'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navegation = useNavigate()

  const dispatch = useDispatch()

  const cerrarSesion = () => {
    dispatch(cerrarSesionUsuario())
    navegation('/Login')
  }
  
  const activo = useSelector(store => store.usuario.activo)

  return (
    <div className='navbar navbar-dark bg-dark p-3'>
        <Link className='navbar-brand' to='/'>APP POKE</Link>
        <div className="d-flex">
          {
            activo ? (
                <>
                  <NavLink className='btn btn-dark mx-2' to='/'>Inicio</NavLink>
                  <NavLink className='btn btn-dark mx-2' to='/Perfil'>Perfil</NavLink>
                  <button 
                    className='btn btn-dark mx-2'
                    onClick={() => cerrarSesion()}
                    >Logout
                  </button>
                </>
              ) : (
                
                <NavLink className='btn btn-dark mx-2' to='/Login'>Login</NavLink>
            )
          }
        </div>
    </div>
  )
}

export default Navbar