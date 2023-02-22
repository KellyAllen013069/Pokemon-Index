import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { getData } from './utils/getData';
import Home from './pages/home.page';
import PokeCard from './pages/pokecard.page';


import './App.css';

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const asyncFetch = async () => {
      let {pokemon} = await getData();
      if (pokemon === false) {
        console.error("Pokemon List failed to load");
      }
      else {
        setPokemonList(pokemon);
        setIsLoading(false);
      }
    }

    useEffect(() => {
      asyncFetch();
    },[]);

  if(!isLoading) { 
    return (
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home pokemonList={pokemonList}/>}/>
          <Route path="/pokecard" element = {<PokeCard />}/>
        </Routes>
      </BrowserRouter>
      
    );
  }
}

export default App;
