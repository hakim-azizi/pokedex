import PropTypes from "prop-types";
function PokemonCard({ pokemon, buttoncreation, index,numberspokemons }) {
  let affiche;
  pokemon.imgSrc ? affiche = <img className="card-img" src={pokemon.imgSrc} /> : affiche = <p>??????????</p>;
  return (
    <>
      <figure className="card">
        {affiche}
      </figure>
      <figcaption className="text-card">
        <h2>{pokemon.name}</h2>
      </figcaption>
    </>
  );
}
export default PokemonCard;
PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}