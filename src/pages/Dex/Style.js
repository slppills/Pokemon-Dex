import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-y: scroll;
  display: block;
`;

export const MyPokemonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const MyPokemonH2 = styled.h2`
  margin: 20px 0;
  color: #ff0000;
  font-size: 1.5rem;
  text-align: center;
`;

export const PokeListWrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  width: 100%;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, auto));
  border: 1px solid rgb(221, 221, 221);
  gap: 20px;
`;
