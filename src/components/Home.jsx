import styled from "@emotion/styled";
import { Link } from "gatsby";
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

const HomeLink = styled(Link)`
  align-self: center;
  margin-top: 6vh;
  outline: 2px outset var(--secondary-color);
  padding: 0.2rem 1.5rem;
  color: var(--bg-color);
  opacity: 0.87;
  font-weight: bold;
  background-color: var(--text-color);
  font-size: clamp(0.5rem, 0.5rem + 1vw, 1rem);
  @media (max-width: ${BREAKPOINT.md}) {
    display: none;
  }
`;
export { HomeLink };
