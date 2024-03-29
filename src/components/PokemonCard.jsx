function PokemonCard(props) {
  console.log("props : ",props);

   let affiche;

    props.pokemon.imgSrc ?  affiche=<img className="card-img" src={props.pokemon.imgSrc} /> : affiche=<p>??????????</p>;
   // props.pokemon.imgSrc ?  affiche[1]=props.pokemon.name : affiche[1]=props.pokemon[1].name;


    return (
    <>

    <figure className="card">
    {affiche}
    </figure>
    <figcaption className="text-card">
     {props.pokemon.name}
    </figcaption>
    </>
    );
  }

  export default PokemonCard;