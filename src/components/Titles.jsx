import styled from "@emotion/styled";
import BREAKPOINT from "./Media";
// const EaseIn = keyframes``;

const MainTitle = styled.h1`
  font-size: clamp(0.8rem, 0.8rem + 2vw, 3rem);
  margin-top: 1rem;
  color: var(--text-color);
  opacity: 0.87;
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

export { MainTitle, TitleStyle, Dev };
