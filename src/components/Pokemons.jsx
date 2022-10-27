import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import CharacterItem from "./CharacterItem";



const Pokemons = () => {
  const user = useSelector((state) => state.user);

  const [characterSearch, setCharacterSearch] = useState("");
  const [characters, setCharacters] = useState([]);
  const [types, setTypes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151`)
      .then(res => {
        setCharacters(res.data.results)
        // setIsLoading(!isLoading)    
      })
    axios.get(`https://pokeapi.co/api/v2/type/`)
      .then(res => setTypes(res.data.results))
  }, [])

console.log(characters)


  const submit = e => {
    e.preventDefault();
    navigate(`/pokemons/${characterSearch}`);

  }

  const filterTypes = e => {
    axios.get(e.target.value)
      .then(res => setCharacters(res.data.pokemon))
  }



  const [page, setPage] = useState(1);
  const lastIndex = page * 12;
  const firstIndex = lastIndex - 12;
  const pokemonsPaginated = characters?.slice(firstIndex, lastIndex);

  const lastPage = Math.ceil(characters?.length / 10);

  const numbers = []; // [1, 2, 3, 4]
  for (let i = 1; i <= lastPage; i++) {
    numbers.push(i);
  }


  console.log(pokemonsPaginated)





  return (
    <>
    <img className="background-search" src="https://www.videogameschronicle.com/files/2021/08/pokemon-legends-arceus.jpg" alt="" />
    <div className="Search-Pokemon">
      <div className="search">
      <p>Welcome {user} 
      </p>
      <br />
      <form onSubmit={submit}>
        <input type="text"
          value={characterSearch}
          onChange={e => setCharacterSearch(e.target.value)}
        />
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>

      <select onChange={filterTypes} >
        <option value="">Type</option>
        {
          types.map((type) => (
            <option
              value={type.url}
              key={type.url}
            >{type.name}</option>

          ))

        }

      </select>

      </div>

     

      
      <ul className="Card-container">
        {
          pokemonsPaginated?.map(character => (
            
            <CharacterItem  
              key={character.url ? character.url : character.pokemon.url} 
              CharacterUrl={character.url ? character.url : character.pokemon.url}
            />

           
            
          )
          )}
      </ul>
<br />
<div className="btn-container">
      <button className="btn-prev" onClick={() => 
       setPage(page - 1)}
       disabled={page === 1}
       >
        <i className="bi bi-caret-left-fill"></i>
      </button>

      {numbers.map((number) => (
        <button className="btn-num" onClick={() => setPage(number)}>{number}</button>
      ))}

      <button className="btn-next" onClick={() => 
        setPage(page + 1)}
        disabled={page === lastPage}
         >
        <i className="bi bi-caret-right-fill"></i>
      </button>
   
      </div>
    </div>
    </>
  );

};
export default Pokemons;

