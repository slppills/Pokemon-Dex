import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const PokemonName = styled.h2`
  color: #ff0000;
  font-size: 1.5em;
  font-weight: bold;
`;

export const BackButton = styled.button`
  padding: 15px 25px;
  background-color: lightgray;
  border-radius: 10px;
  font-size: 1rem;
  transition-duration: 0.2s;
  &:hover {
    background-color: gray;
    color: white;
  }
`;
