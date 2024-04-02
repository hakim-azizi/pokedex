// import { createUseStyles } from "react-jss";
import { useState } from "react";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PokemonCard from "./components/PokemonCard.jsx";
import './App.css';
function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ]
    const pokemonnb=pokemonList.length-1;
    let [pokemonIndex, setCount]=useState(0);
    const previous = (event) => {
      setCount(pokemonIndex - 1)
    }
    const next = (event) => {
      setCount(pokemonIndex + 1)
    }
const prev =<button onClick={previous}>Pr&eacute;c&eacute;dent</button>
const nex =<button onClick={next}>Suivant</button>
  const button=[prev,nex,];
const divcreat=React.createElement('div', {id: 'change'},
  React.createElement('button',{onClik:{previous}} ),
 React.createElement('button',{onClik:{next}} )
);
 return(
   < 
   PokemonCard pokemon={pokemonList[pokemonIndex]} index={pokemonIndex} buttoncreation={button} numberspokemons={pokemonnb}
 />
   );
}
export default App;