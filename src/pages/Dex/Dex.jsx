import * as S from "./Style.js";
import MOCK_DATA from "../../mock.js";
import PokemonList from "../../components/PokemonList/PokemonList.jsx";
import { DexContext } from "../../context/DexContext.js";
import Dashboard from "../../components/Dashboard/Dashboard.jsx";

const Dex = () => {
  return (
    <DexContext.Provider value={{ MOCK_DATA }}>
      <S.Wrapper>
        <S.MyPokemonWrapper>
          <S.MyPokemonH2>나만의 포켓몬</S.MyPokemonH2>
          <Dashboard />
        </S.MyPokemonWrapper>
        <S.PokeListWrapper>
          <PokemonList isSelected={false} />
        </S.PokeListWrapper>
      </S.Wrapper>
    </DexContext.Provider>
  );
};

export default Dex;
