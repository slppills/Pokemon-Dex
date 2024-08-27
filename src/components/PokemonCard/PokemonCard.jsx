import { useNavigate } from "react-router-dom";
import * as S from "./Style.js";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { addPokemon, removePokemon } from "../../redux/slices/dexSlice.js";

const PokemonCard = ({ pokemon, isSelected }) => {
  const selectedPokemon = useSelector((state) => state.dex.selectedPokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonRef = useRef();
  const isPokemonSelected = selectedPokemon.includes(Number(pokemon.id));

  return (
    <S.Wrapper onClick={(e) => e.target !== buttonRef.current && navigate(`/pokemon-detail?id=${pokemon.id}`)}>
      <img src={pokemon.img_url} alt="포켓몬 이미지" width={100} />
      <S.PokemonName>{pokemon.korean_name}</S.PokemonName>
      <S.PokeNumber>No. {String(pokemon.id).padStart(3, "0")}</S.PokeNumber>
      {isSelected ? (
        <S.AddRemoveButton
          ref={buttonRef}
          id={pokemon.id}
          $backgroundcolor="#ff0000"
          $hoverbackgroundcolor="#cc0000"
          onClick={(e) => {
            toast.info(`${pokemon.korean_name}, 수고했어! 들어가서 편히 쉬어.`);
            dispatch(removePokemon(e.target.id));
          }}
        >
          삭제
        </S.AddRemoveButton>
      ) : (
        <S.AddRemoveButton
          ref={buttonRef}
          $backgroundcolor={isPokemonSelected ? "#008000" : "#FF0000"}
          $hoverbackgroundcolor={isPokemonSelected ? "#006400" : "#cc0000"}
          onClick={() => {
            if (selectedPokemon.length >= 6) {
              alert("포켓몬은 6마리까지 소지할 수 있습니다.");
            } else if (selectedPokemon.includes(Number(pokemon.id))) {
              alert("해당 포켓몬이 이미 있습니다");
            } else {
              toast.success(`${pokemon.korean_name}, 너로 정했다!`);
              dispatch(addPokemon(pokemon.id));
            }
          }}
        >
          {isPokemonSelected ? "선택됨" : "추가"}
        </S.AddRemoveButton>
      )}
    </S.Wrapper>
  );
};

export default PokemonCard;
