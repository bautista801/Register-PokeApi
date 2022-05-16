import {auth, firebase, db, storage} from '../Firebase'

// data inicial

const dataInicial = {
    loading: false,
    activo: false
}



//types

const loading = 'Cargando...'
const usuarioError = 'Error de carga'
const usuarioExito = 'usuarioExito'
const cerrarSesion = 'sesion cerrada'

//reducer

export default function usuarioReducer(state = dataInicial, action) {
    switch(action.type){
        case loading:
            return {...state, loading: true}

        case usuarioError:
            return {...dataInicial}

        case usuarioExito:
            return {...state, loading: false, user: action.payload, activo: true}

        case cerrarSesion:
            return {...dataInicial}

        default:
            return {...state}
    }
}



//acciones

export const ingresoUsuarioAccion = () => async (dispatch) => {
    
    dispatch({
        type: loading
    })
    
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const res = await auth.signInWithPopup(provider)

        //console.log(res.user)

        const usuario = {
            uid: res.user.uid,
            email: res.user.email,
            nameUsuario: res.user.displayName,
            fotoUsuario: res.user.photoURL    
        }

        const usuarioDB = await db.collection('usuarios').doc(usuario.email).get()
        if(usuarioDB.exists){
            //cuando el usuario existe
            dispatch({
                type: usuarioExito,
                payload: usuarioDB.data()
            })
            localStorage.setItem('usuario', JSON.stringify(usuarioDB.data()))
        }else{
            //si el usuario no existe, lo guarda en la base
            await db.collection('usuarios').doc(usuario.email).set(usuario)
            dispatch({
                type: usuarioExito,
                payload: usuario
            })
    
            localStorage.setItem('usuario', JSON.stringify(usuario))
        }
        
    } catch (error) {
        console.log(error)
        dispatch({
            type: usuarioError
        })
    }
}


export const cerrarSesionUsuario = () => async (dispatch) => {
    
    auth.signOut()
    localStorage.removeItem('usuario')
    dispatch({
        type: cerrarSesion
    })
}


export const leerUsuarioActivo = () => (dispatch) =>{
    if(localStorage.getItem('usuario')){
        dispatch({
            type: usuarioExito,
            payload: JSON.parse(localStorage.getItem('usuario'))
        })
    }
}


export const actualizarUsuarioAccion = (nombreActualizado) => async (dispatch, getState) =>{
    dispatch({
        type: loading
    })

    const {user} = getState().usuario
    // console.log(user)

    try {
        await db.collection('usuarios').doc(user.email).update({
            nameUsuario: nombreActualizado
        })
        
        const usuario = {
            ...user,
            nameUsuario: nombreActualizado
        }

        dispatch({
            type: usuarioExito,
            payload: usuario
        })

        localStorage.setItem('usuario', JSON.stringify(usuario))

    } catch (error) {
        console.log(error)
    }
}


export const editarFotoAccion = (imagenEditada) => async (dispatch, getState) =>{
    dispatch({
        type: loading
    })

    const {user} = getState().usuario
    // console.log(user)

    try {

        const imagenRef = await storage.ref().child(user.email).child('foto Perfil')
        await imagenRef.put(imagenEditada)
        const imagenURL = await imagenRef.getDownloadURL()

        await db.collection('usuarios').doc(user.email).update({
            fotoUsuario: imagenURL
        })

        const usuario = {
            ...user,
            fotoUsuario: imagenURL
        }

        dispatch({
            type: usuarioExito,
            payload: usuario
        })

        localStorage.setItem('usuario', JSON.stringify(usuario))

    } catch (error) {
        console.log(error)
    }
}