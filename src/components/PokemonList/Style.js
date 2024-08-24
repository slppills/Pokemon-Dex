import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  display: block;
  &:hover {
    transform: translateY(-3%);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 8px 4px;
  }
`;

export const PokemonName = styled.p`
  margin: 5px 0;
  font-weight: bold;
  font-size: 0.875rem;
`;

export const PokeNumber = styled.p`
  margin: 12px 0 22px 0;
  font-size: 0.75rem;
  color: #666666;
`;

export const AddButton = styled.button`
  background-color: #ff0000;
  padding: 5px 10px;
  color: white;
  font-weight: 500;
  font-size: 0.75rem;
  border-radius: 5px;
  transition: background-color 0.1s;
  &:hover {
    background-color: #cc0000;
  }
`;
