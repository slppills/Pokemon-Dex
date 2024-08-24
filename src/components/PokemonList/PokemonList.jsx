import PokemonCard from "../PokemonCard/PokemonCard.jsx";

const PokemonList = ({ pokemonList, setSelectedPokemon, selectedPokemon, isSelected }) => {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          pokemon={pokemon}
          setSelectedPokemon={setSelectedPokemon}
          selectedPokemon={selectedPokemon}
          key={pokemon.id}
          isSelected={isSelected}
        />
      ))}
    </>
  );
};

export default PokemonList;
