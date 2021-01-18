import styled from "@emotion/styled";
import BREAKPOINT from "./Media";
// const EaseIn = keyframes``;

const MainTitle = styled.h1`
  font-size: clamp(1rem, 1.07rem + 2vw, 4rem);
  margin-top: 1rem;
  color: var(--text-color);
  opacity: 0.87;
  width: auto;
  line-height: 1.3;
  @media (min-width: ${BREAKPOINT.md}) {
    margin-top: 4rem;
  }
  margin-bottom: 2.5rem;
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
  font-size: clamp(2rem, 2rem + 2vw, 3rem);
  opacity: 0.87;
  color: var(--text-color);
`;

const ProjectTitle = styled.h3`
  display: block;
  width: 100%;
  font-size: clamp(1.2rem, 1.2rem + 2vw, 3rem);
  opacity: 0.87;
  color: var(--text-color);
`;

export { MainTitle, Dev, Subtitle, ProjectTitle };
