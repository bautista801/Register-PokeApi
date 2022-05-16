import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion, pokeDetalle } from '../redux/pokeDucks'
import Detalle from './Detalle'

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokes = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

  return (
        <div className="row">
            <div className="col-md-6">
                <h2 className='text-center'>Lista de Pokemones</h2>
                <div className="d-flex justify-content-around">
                    {
                        pokes.length === 0 && 
                        <button 
                            onClick={() => dispatch(obtenerPokemonesAccion())}
                            className='btn btn-dark mt-2'    
                            >Obtener pokemones
                        </button>
                    }

                    {
                        next && 
                        <button 
                            onClick={() => dispatch(siguientePokemonAccion())}
                            className='btn btn-dark mt-2' 
                            >Siguiente
                        </button>
                    }

                    {
                        previous && 
                        <button 
                            onClick={() => dispatch(anteriorPokemonAccion())}
                            className='btn btn-dark mt-2' 
                            >Anterior
                        </button>
                    }
                </div>
                <ul className='list-group mt-3'>
                    {
                        pokes.map(item => (
                            <li className='list-group-item text-uppercase'
                                key={item.name}
                                >{item.name}
                                <button 
                                    className="btn btn-dark btn-sm float-end"
                                    onClick={() => dispatch(pokeDetalle(item.url))}
                                    >info
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div className="col-md-6">
                <h2 className='text-center'>Detalle del Pokemón</h2>
                <Detalle />
            </div>

        </div>

  )
}

export default Pokemones