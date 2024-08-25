import { useContext } from "react";
import PokemonCard from "../PokemonCard/PokemonCard.jsx";
import { DexContext } from "../../context/DexContext.js";

const PokemonList = ({ isSelected }) => {
  const { MOCK_DATA } = useContext(DexContext);

  return (
    <>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} isSelected={isSelected} />
      ))}
    </>
  );
};

export default PokemonList;
