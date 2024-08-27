import styled from "styled-components";

export const MyPokemonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  justify-items: center;
`;

export const MyPokemonBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  border: 2px dashed rgb(204, 204, 204);
  background-color: white;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    width: 50px;
    height: 50px;
  }
`;
