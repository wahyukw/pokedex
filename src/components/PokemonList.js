import React from 'react'
import Pokemon from './Pokemon'
import './PokemonList.css'

const PokemonList = ({pokemons}) => {
  return (
    <div className='container'>
      {pokemons.map((pokemon, i) => 
            <Pokemon 
              id= {pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type= {pokemon.types[0].type.name}
              key={i}          
            />
          )}
    </div>
  )
}

export default PokemonList
