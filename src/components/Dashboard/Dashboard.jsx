import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./Style.js";
import MOCK_DATA from "../../mock.js";

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pokemonId = Number(searchParams.get("id"));
  const pokemonInfo = MOCK_DATA.find((pokemon) => pokemon.id === pokemonId);

  return (
    <S.Wrapper>
      <img src={pokemonInfo.img_url} alt="포켓몬 이미지" width={200} />
      <S.PokemonName>{pokemonInfo.korean_name}</S.PokemonName>
      <p>타입 : {pokemonInfo.types.join(", ")}</p>
      <p>{pokemonInfo.description}</p>
      <S.BackButton onClick={() => navigate(-1)}>뒤로 가기</S.BackButton>
    </S.Wrapper>
  );
};

export default Dashboard;
