import * as S from "./Style.js";
import { useSelector } from "react-redux";
import Pokeball from "../../assets/Pokeball.png";
import PokemonCard from "../../components/PokemonCard/PokemonCard.jsx";
import { useContext } from "react";
import { DexContext } from "../../context/DexContext.js";

const Dashboard = () => {
  const selectedPokemon = useSelector((state) => state.dex.selectedPokemon);
  const { MOCK_DATA } = useContext(DexContext);

  return (
    <S.MyPokemonContainer>
      {Array(6)
        .fill(null)
        .map((_, index) =>
          selectedPokemon[index] ? (
            <PokemonCard key={index} pokemon={MOCK_DATA[selectedPokemon[index] - 1]} isSelected={true} />
          ) : (
            <S.MyPokemonBox key={index + 999}>
              <img src={Pokeball} alt="포켓몬 볼" />
            </S.MyPokemonBox>
          )
        )}
    </S.MyPokemonContainer>
  );
};

export default Dashboard;
