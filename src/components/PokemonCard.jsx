
function PokemonCard() {
    const pokemon=[];
    const pokemonList = [
        {
          name: "bulbasaur",
          imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];
      for(let i=0;i<pokemonList.length;i++){
        if(pokemonList!==undefined){
            pokemon.push(pokemonList[i])
        }
      }
    return (
    <>
     <figure className="card">
        <img className="car-img" src={pokemon[0].imgSrc} />
    </figure>
    <figcaption className="text-card">
    {pokemon[0].name}
        </figcaption>
    </>
    );
  }
  
  export default PokemonCard;