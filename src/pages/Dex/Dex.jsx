import * as S from "./Style.js";
import Pokeball from "../../assets/Pokeball.png";
import MOCK_DATA from "../../mock.js";
import PokemonList from "../../components/PokemonList/PokemonList.jsx";
import PokemonCard from "../../components/PokemonCard/PokemonCard.jsx";
import { DexContext } from "../../context/DexContext.js";
import { useSelector } from "react-redux";

const Dex = () => {
  // const [selectedPokemon, setSelectedPokemon] = useState([]);
  const selectedPokemon = useSelector((state) => state.dex.selectedPokemon);
  console.log(selectedPokemon);

  const value = {
    MOCK_DATA,
  };

  return (
    <DexContext.Provider value={value}>
      <S.Wrapper>
        <S.MyPokemonWrapper>
          <S.MyPokemonH2>나만의 포켓몬</S.MyPokemonH2>
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
        </S.MyPokemonWrapper>
        <S.PokeListWrapper>
          <PokemonList isSelected={false} />
        </S.PokeListWrapper>
      </S.Wrapper>
    </DexContext.Provider>
  );
};

export default Dex;
