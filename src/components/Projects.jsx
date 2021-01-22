import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import BREAKPOINT from "./Media";
const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem 5rem;
  @media (min-width: ${BREAKPOINT.md}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${BREAKPOINT.lg}) {
    grid-gap: 5rem 5rem;
  }
  margin-top: 5rem;
`;
const EaseIn = keyframes`
  from {
    margin-left:-200px;
    opacity:0;
  }
  to {
    margin-left:0;
    opacity:1;
  }
`;
const CardProject = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.01);
  border-radius: 2px;
  animation-name: ${EaseIn};
  animation-duration: 1s;
  margin-bottom: 2rem;
  @media (min-width: ${BREAKPOINT.md}) {
    margin-bottom: 0;
  }
`;

export { ProjectsWrapper, CardProject };
