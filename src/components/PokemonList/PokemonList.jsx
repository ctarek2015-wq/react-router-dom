import { Link } from "react-router";

const PokemonList = ({ pokemon }) => {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {pokemon.map((currentPokemon) => (
          <Link to={`/pokemon/${currentPokemon._id}`} key={currentPokemon.name}>
            <li>{currentPokemon.name}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default PokemonList;
