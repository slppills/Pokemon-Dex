import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  height: 100%;
  width: 80%;
  margin: 0 auto;
`;

export const StartDexBtn = styled.button`
  padding: 20px 30px;
  min-width: 162px;
  background-color: #ff0000;
  color: white;
  align-self: center;
  border-radius: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: background-color 0.3s;
  &:hover {
    background-color: #cc0000;
  }
`;
