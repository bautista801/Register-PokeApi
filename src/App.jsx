import React from 'react';
import { auth } from "./Firebase";
import Pokemones from "./components/Pokemones";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Perfil from "./components/Perfil";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

function App() {

  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    const fetchUser = () => {

      auth.onAuthStateChanged(user => {
        if (user) {
          setFirebaseUser(user)
        }else {
          setFirebaseUser(null)
        }
      })
    }

    fetchUser()
  }, [])


    const Ruta = ({children} ) => { 
      const user = firebaseUser
      if (!user) {
        return <Navigate to='/login' /> 
      }
      return children
    }


  return (
    <BrowserRouter>
      <div className="container">

        <Navbar />

        <Routes>
          <Route path='/' element={
            <Ruta> 
              <Pokemones />              
            </Ruta>}>
          </Route>    
          <Route path='/Perfil' element={
            <Ruta> 
              <Perfil />
            </Ruta>}>
          </Route>        
          <Route element={<Login />} path='/Login' />
        </Routes>

      

      </div>

    </BrowserRouter>
  )
}

export default App;
