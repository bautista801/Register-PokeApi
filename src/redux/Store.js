import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
 
import pokeReducer from './pokeDucks'
import usuarioReducer, {leerUsuarioActivo} from './UsuarioDuck'
 
const rootReducer = combineReducers({
    pokemones: pokeReducer,
    usuario: usuarioReducer
})
 

export default function generateStore() {
    const store = createStore( rootReducer, composeWithDevTools( applyMiddleware(thunk) ) )
    leerUsuarioActivo()(store.dispatch)
    return store
}