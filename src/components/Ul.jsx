import styled from "@emotion/styled";
import BREAKPOINT from "./Media";
export default styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: ${BREAKPOINT.sm}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${BREAKPOINT.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
