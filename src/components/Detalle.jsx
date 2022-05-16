import React from 'react'
import {pokeDetalle} from '../redux/pokeDucks'
import {useDispatch, useSelector} from 'react-redux'

const Detalle = () => {

    const dispatch = useDispatch()

    React.useEffect(() => {
        const fetchData = () => {
            dispatch(pokeDetalle())
        }   
        fetchData()
    }, [])

    const pokemon = useSelector(store => store.pokemones.unPokemon)

  return pokemon ? (
    <div className="card mt-5 text-center">
        <div className="card-body">
            <img src={pokemon.foto} className="img-fluid"/>
            <div className="card-title text-center text-uppercase">{pokemon.name}</div>
            <p className="card-text text-center">Altura: {pokemon.alto} | Ancho: {pokemon.ancho}</p>
        </div>
    </div>
  ) : null
}

export default Detalle