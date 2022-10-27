import { useEffect, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import PokemonDetail from './components/PokemonDetail'
import Pokemons from './components/Pokemons'
import ProtectedRoutes from './components/ProtectedRoutes'
import UserInput from './components/UserInput'

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  },[])

  return (
    <div className="App">
        
      <HashRouter>
        <Routes>
         
          <Route path='/' element={<UserInput isLoading={isLoading} />} />
          
          
        <Route element={<ProtectedRoutes />}>

             <Route path='/pokemons' element={<Pokemons            
             />} />
             <Route path='/pokemons/:id' element={<PokemonDetail />} />
             </Route>

        </Routes>
      </HashRouter>
  
    </div>
  )
}

export default App
