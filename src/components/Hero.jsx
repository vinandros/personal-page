import styled from "@emotion/styled";
import BREAKPOINT from "./Media";
export default styled.section`
  width: 100%;
  height: auto;
`;

const HeroWrapper = styled.div`
  display: grid;
  @media (min-width: ${BREAKPOINT.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export { HeroWrapper };
