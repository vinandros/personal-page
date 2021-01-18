import styled from "@emotion/styled";
import BREAKPOINT from "./Media";

export default styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  @media (min-width: ${BREAKPOINT.md}) {
    height: 100vh;
  }
`;
