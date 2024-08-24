import { useState } from "react";
import * as S from "./Style.js";
import Pokeball from "../../assets/Pokeball.png";
import MOCK_DATA from "../../mock.js";
import PokemonList from "../../components/PokemonList/PokemonList.jsx";
import PokemonCard from "../../components/PokemonCard/PokemonCard.jsx";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  return (
    <S.Wrapper>
      <S.MyPokemonWrapper>
        <S.MyPokemonH2>나만의 포켓몬</S.MyPokemonH2>
        <S.MyPokemonContainer>
          {Array(6)
            .fill(null)
            .map((_, index) =>
              selectedPokemon[index] ? (
                <PokemonCard
                  key={index}
                  pokemon={MOCK_DATA[selectedPokemon[index] - 1]}
                  setSelectedPokemon={setSelectedPokemon}
                  isSelected={true}
                />
              ) : (
                <S.MyPokemonBox key={index + 999}>
                  <img src={Pokeball} alt="포켓몬 볼" />
                </S.MyPokemonBox>
              )
            )}
        </S.MyPokemonContainer>
      </S.MyPokemonWrapper>
      <S.PokeListWrapper>
        <PokemonList
          pokemonList={MOCK_DATA}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          isSelected={false}
        />
      </S.PokeListWrapper>
    </S.Wrapper>
  );
};

export default Dex;
