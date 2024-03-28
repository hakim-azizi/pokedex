
function PokemonCard() {
    const pokemon=[[],[]];
    let affiche;
    let affichename;
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
        if(pokemonList[i].imgSrc!==undefined){
            pokemon[0].push(pokemonList[i]);
        }
        else{
          pokemon[1].push(pokemonList[i]);
          
      }

      }
      pokemonList[1].imgSrc ?  affiche=<img className="card-img" src={pokemonList[0].imgSrc} /> : affiche=<p>??????????</p>;
      pokemonList[1].imgSrc ?  affichename=pokemonList[0].name : affichename=pokemonList[1].name;
    return (
    <>
     <figure className="card">
     {affiche}
    </figure>
    <figcaption className="text-card">
    {affichename}
        </figcaption>
    </>
    );
  }
  
  export default PokemonCard;