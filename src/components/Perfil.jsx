import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {actualizarUsuarioAccion, editarFotoAccion} from '../redux/UsuarioDuck'

const Perfil = () => {

    const usuario = useSelector(store => store.usuario.user)
    const loading = useSelector(store => store.usuario.loading)
    //console.log(usuario)

    const [nombreUsuario, setNombreUsuario] = React.useState(usuario.nameUsuario)
    const [activarFormulario, setActivarFormulario] = React.useState(false)
    const [error, setError] = React.useState(false)
    
    const dispatch = useDispatch()
    
    const actualizarUsuario = () => {

        if(!nombreUsuario.trim()){
            // console.log('vacio')
            return
        }

        dispatch(actualizarUsuarioAccion(nombreUsuario))
        setActivarFormulario(false)
    }

    const seleccionarArchivo = imagen => {

        const imagenPersona = imagen.target.files[0]
        console.log(imagen.target.files[0])

        if(imagenPersona === undefined){
            console.log('no se seleccionó ninguna imagen')
            return
        }

        if(imagenPersona.type === "image/png" || imagenPersona.type === "image/jpg" || imagenPersona.type === "image/jpeg"){
            dispatch(editarFotoAccion(imagenPersona))

            setError(false)
        }else {
            setError(true)
        }
    }

  return (
    <div className='mt-5 text-center'>
        <div className="card">
            <div className="card-body">
                <img src={usuario.fotoUsuario} width='150px' className='img-fluid' />
                <h5 className="card-title mt-3">Nombre: {usuario.nameUsuario}</h5>
                <p className="card-text">Email: {usuario.email}</p>
                <button 
                    className="btn btn-dark"
                    onClick={() => setActivarFormulario(true)}
                    >
                    Editar Nombre
                </button>
                {
                    error &&
                    <div className="alert alert-warning mt-3">
                        solo archivos PNG / JPG
                    </div>
                }
                <div className="custom-file my-3">
                    <input 
                        type="file" 
                        className="custom-file-input" 
                        id="inputGroupFile02" 
                        style={{display: 'none'}}
                        onChange={e => seleccionarArchivo(e)}
                    />
                    <label 
                        className="btn btn-dark" 
                        htmlFor="inputGroupFile02"
                        >Actualziar Imagen
                    </label>
                </div>
            </div>
            {   
                loading &&
                <div className="card-body">
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            }
            {
                activarFormulario &&
                <div className="">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="input-group mb-3">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    value={nombreUsuario}
                                    onChange={e => setNombreUsuario(e.target.value)} 
                                />
                                <div className="input-group-append">
                                    <button 
                                        className="btn btn-dark" 
                                        type="button" 
                                        onClick={() => actualizarUsuario()}
                                        >Actualizar
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            }
        </div>
    </div>
  )
}

export default Perfil