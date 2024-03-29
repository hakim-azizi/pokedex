
function PokemonCard() {
    let pokemon=[,];
    const pokemonList = [
        {
          name: "bulbasaur",
          imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];
      pokemonList[1].imgSrc ?  pokemon[0]=<img className="card-img" src={pokemonList[0].imgSrc} /> : pokemon[0]=<p>??????????</p>;
      pokemonList[1].imgSrc ?  pokemon[1]=pokemonList[0].name : pokemon[1]=pokemonList[1].name;
    return (
    <>
    {console.log('tableau pokemon ',pokemon)}
    <figure className="card">
      {pokemon[0]}
    </figure>
    <figcaption className="text-card">
      {pokemon[1]}
    </figcaption>
    </>
    );
  }
  
  export default PokemonCard;