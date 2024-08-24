import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  button {
    background: inherit; 
    box-shadow:none;
    border-radius: 0;
    overflow:visible; 
    cursor:pointer
   }
`;

export default GlobalStyle;
