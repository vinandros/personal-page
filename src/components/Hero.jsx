import styled from "@emotion/styled";
import BREAKPOINT from "./Media";

export default styled.div`
  display: grid;
  @media (min-width: ${BREAKPOINT.md}) {
    grid-template-columns: 8fr 10fr;
  }
`;
