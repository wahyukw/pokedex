import PokemonList from './components/PokemonList';
import React, {useState, useEffect} from 'react';

function App() {

  //Initialize hooks
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  //Fetch PokeAPI function, and store result into data variable
  //Result includes name and another link to call api for more details on the pokemon
  const fetchAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    
    //Set Load More into the next url if user wants to continue browsing the next list on the pokedex
    setLoadMore(data.next)
    
    //For each pokemon in first API result, call another API to get their details.
    const createPokemonObject = (result) => {
      result.forEach(async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        //Store the Pokemon details in the currentList array.
        setAllPokemons(currentList => [...currentList, data])
        //Push the currentList array to allPokemons state array.
        allPokemons.push(data)
      })
    }
    //Call the create pokemon object function. API result based on 2nd API call.
    createPokemonObject(data.results)
  }
  //When App first mount, call fetchAllPokemons function. This function will not end in infinite loop because
  //of the empty dependency.
  useEffect(() => {
    fetchAllPokemons()
  }, [])

    return (
      <div className="app-container">
        <h1>Pokedex</h1>
        {/* For each pokemon in allPokemons array state, call PokemonList and give id, name, image, type, and key as props */}
        {/* This will be used to display the pokemon details in a card */}
          <PokemonList pokemons={allPokemons} />
        {/* If load more button is clicked, call fetchAllPokemons() but with the next API link to get the next list of pokemons */}
        <button onClick={()=> fetchAllPokemons()}>Load More</button>
      </div>
    );
  }

export default App;
