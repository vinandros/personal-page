import styled from "@emotion/styled";
import BREAKPOINT from "./Media";

const TextBaseStyle = styled.p`
  line-height: 1.6;
  color: var(--paragraph-color);
  opacity: 0.87;
`;

const SimpleText = styled(TextBaseStyle)`
  font-size: clamp(0.8rem, 0.8rem + 1vw, 1.4rem);
  font-weight: bold;
  color: black;
`;

export default styled(TextBaseStyle)`
  font-size: clamp(1rem, 1rem + 1vw, 1.5rem);
  margin-bottom: 1.5rem;
  margin-top: 2rem;
`;

const ParagraphWrapper = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 3rem;
  @media (min-width: ${BREAKPOINT.md}) {
    width: 60%;
  }
`;

export { SimpleText, ParagraphWrapper };
