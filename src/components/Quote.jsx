import styled from "@emotion/styled";
import BREAKPOINT from "./Media";

const Quote = styled.code`
  display: block;
  width: 100%;
  padding: 1rem;
  color: var(--quote-text-color);
  background-color: var(--quote-bg);
  transition: background-color ease-in var(--color-transition);
  transition: color ease-in var(--color-transition);
  margin-top: 5vh;
  outline: 3px solid var(--secondary-color);
`;

const Blockquote = styled.blockquote`
  margin: 0;
  padding: 0;
  font-size: clamp(0.5rem, 0.5rem + 1vw, 1.5rem);
  opacity: 0.65;
`;

const baseStyleP = styled.p`
  font-size: clamp(0.5rem, 0.5rem + 1vw, 1.5rem);
`;

const Tag = styled(baseStyleP)`
  margin-left: 0.5rem;
  opacity: 0.65;
  @media (min-width: ${BREAKPOINT.md}) {
    margin-left: 1.5rem;
  }
`;

const PText = styled(baseStyleP)`
  margin-left: 1rem;
  font-weight: 800;
  opacity: 0.87;
  @media (min-width: ${BREAKPOINT.md}) {
    margin-left: 2.5rem;
  }
`;
export { Quote, Blockquote, Tag, PText };
