import * as S from "./Style.js";
import PokemonLogo from "../../assets/PokemonLogo.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.Wrapper>
        <img src={PokemonLogo} alt="포켓몬 로고" />
        <S.StartDexBtn onClick={() => navigate("/dex")}>
          <span>포켓몬 도감 시작하기</span>
        </S.StartDexBtn>
      </S.Wrapper>
    </>
  );
};

export default Home;
