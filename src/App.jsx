import PokemonCard from "./components/PokemonCard.jsx";
import './App.css';
function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      // imgSrc:0,
    },
    {
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
  ];
  return (
      < PokemonCard pokemon={pokemonList[0]} />
    );
}
export default App;
