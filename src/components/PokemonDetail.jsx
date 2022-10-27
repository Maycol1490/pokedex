import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getTypeColor from '../utils/getTypeColor';



const PokemonDetail = () => {

    const { id } = useParams(); //para recibir lo que viene de id en route de app.jsx

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setCharacter(res.data))

    }, [id])

    const typePokemon = character.types?.[0].type.name;

    const sumStats =character.stats?.[0].base_stat + character.stats?.[1].base_stat + character.stats?.[2].base_stat + character.stats?.[3].base_stat + character.stats?.[4].base_stat + character.stats?.[5].base_stat
   
    return (
        <div className='PokemonDetail' >
            <div className='img-ball-detail'>
                 <img className='ball-detail' src="https://www.pngall.com/wp-content/uploads/4/Pokemon-Pokeball-PNG-Photo.png" alt="" /> 
            </div>
           <div className='name-img'>
              <h1 id=
                    {getTypeColor(typePokemon)}>{character.name?.toUpperCase() }</h1>
          
          </div>
          <div className='imgDetails'>  
          <div className='imgabso'>
            <img className='imgDetail' src={character.sprites?.other.home.front_default} alt="" />

          </div>
            <h1></h1>
            <div className='img-base' id=
                    {getTypeColor(typePokemon)}> 
            </div>
            </div>

            <section className='description'>
                <div className='description-text'>

                <ul className='description-list'>
                    <li>  <strong> ID #</strong>{character.id}</li>
                    <li><strong>height</strong>{character.height}</li>
                
                    <li><strong>Abilities</strong> <h2 className=
                    {getTypeColor(typePokemon)} id={"id-description"} >  {character.abilities?.[0]?.ability?.name} </h2></li>
                
                    <li ><strong>Type</strong> <h2 className=
                    {getTypeColor(typePokemon)} id={"id-description"} > {character.types?.[0].type.name}</h2></li>
                    <li><strong>Forms</strong><h2 className=
                    {getTypeColor(typePokemon)} id={"id-description"} > {character.forms?.[0]?.name}</h2></li>
                   
                
                </ul>

                </div>
            </section>
            <section className='stats' >
                <h1 id=
                    {getTypeColor(typePokemon)}>STATS</h1>
                <div className="progress hp">
                    <div className="progress-bar" id=
                    {getTypeColor(typePokemon)} role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[0].base_stat}%` }} aria-valuenow={`${character.stats?.[0].base_stat}`} aria-valuemin="0" aria-valuemax="100">HP    {character.stats?.[0].base_stat}% </div>
                    
                </div>
                <br />
                <div className="progress atack">
                    <div className="progress-bar" id=
                    {getTypeColor(typePokemon)} role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[1].base_stat}%` }} aria-valuenow={`${character.stats?.[1].base_stat}`} aria-valuemin="0" aria-valuemax="100"> ATACK {character.stats?.[1].base_stat}%</div>
                </div>
                <br />
                <div className="progress defense">
                    <div className="progress-bar" id=
                    {getTypeColor(typePokemon)} role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[2].base_stat}%` }} aria-valuenow={`${character.stats?.[2].base_stat}`} aria-valuemin="0" aria-valuemax="100"> DEFENSE {character.stats?.[2].base_stat}%</div>
                </div>

                <br />
                <div className="progress  Sp. Attack">
                    <div className="progress-bar" id=
                    {getTypeColor(typePokemon)} role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[3].base_stat}%` }} aria-valuenow={`${character.stats?.[3].base_stat}`} aria-valuemin="0" aria-valuemax="100">SP ATACK {character.stats?.[3].base_stat}%</div>
                </div>

                <br />
                <div className="progress  Sp. Defense">
                    <div className="progress-bar" id=
                    {getTypeColor(typePokemon)} role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[4].base_stat}%` }} aria-valuenow={`${character.stats?.[4].base_stat}`} aria-valuemin="0" aria-valuemax="100"> SP DEFENSE {character.stats?.[4].base_stat}%</div>
                </div>
                <br />
                <div className="progress speed">
                    <div className="progress-bar" id=
                    {getTypeColor(typePokemon)} role="progressbar" aria-label="Example with label" style={{ width: `${character.stats?.[5].base_stat}%` }} aria-valuenow={`${character.stats?.[5].base_stat}`} aria-valuemin="0" aria-valuemax="100"> SPEED {character.stats?.[5].base_stat}%</div>
                </div>
                    <br />
                <h2><strong>Total Power </strong>"{sumStats}  "</h2>
            
            </section>
            <br />
            <section className='container-move'>
            <h1>Movements</h1>
                <br />
            <div className='moves' >
               
                {
                    character.moves?.map((move) => (
                        <li className='list-move' id=
                        {getTypeColor(typePokemon)}
                            key={move.move.name}
                        >{move.move.name}</li>
                    ))
                }

            </div>
            </section>
        </div>
    );
};

export default PokemonDetail;
