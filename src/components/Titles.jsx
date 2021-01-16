import styled from "@emotion/styled";
import BREAKPOINT from "./Media";
// const EaseIn = keyframes``;

const MainTitle = styled.h1`
  font-size: clamp(1rem, 1.2rem + 2vw, 3rem);
  margin-top: 1rem;
  color: var(--text-color);
  opacity: 0.87;
  width: auto;
  @media (min-width: ${BREAKPOINT.md}) {
    margin-top: 4rem;
  }
`;

const TitleStyle = styled.span`
  font-weight: 600;
`;

const Dev = styled(TitleStyle)`
  color: var(--secondary-color);
  font-weight: 800;
`;

const Subtitle = styled.h2`
  display: block;
  width: 100%;
  margin: 2rem 0;
  font-size: clamp(0.8rem, 0.8rem + 2vw, 3rem);
  opacity: 0.87;
  color: var(--text-color);
`;

export { MainTitle, Dev, Subtitle };
