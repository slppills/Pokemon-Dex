import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  max-width: 1280px;
  min-width: 716px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
