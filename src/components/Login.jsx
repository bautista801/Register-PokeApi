import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ingresoUsuarioAccion} from '../redux/UsuarioDuck'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {

  const navegation = useNavigate()

  const dispatch = useDispatch()

  const loading = useSelector(store => store.usuario.loading)
  const activo = useSelector(store => store.usuario.activo)
  //console.log(loading)

  React.useEffect(() => {
    if(activo) {
      navegation('/')
    }
  }, [activo, navegation])


  return (
    <div className='mt-5 text-center'>
        <h3>Ingresar</h3>
        <hr />
        <button 
          className='btn btn-light btn-outline-info btn-lg'
          onClick={() => dispatch(ingresoUsuarioAccion())}
          disabled={loading}
          ><FcGoogle /> Iniciar con Google
        </button>
    </div>
  )
}

export default Login