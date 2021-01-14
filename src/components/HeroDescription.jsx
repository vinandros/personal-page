import styled from "@emotion/styled";
import BREAKPOINT from "./Media";
export default styled.div`
  margin-top: 2rem;
  @media (min-width: ${BREAKPOINT.md}) {
    margin-left: 1rem;
    margin-top: 0;
  }
`;
