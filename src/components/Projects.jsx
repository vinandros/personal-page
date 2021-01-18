import styled from "@emotion/styled";
import BREAKPOINT from "./Media";
const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8rem 12rem;
  @media (min-width: ${BREAKPOINT.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CardProject = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 15px; */
  background-color: rgba(255, 255, 255, 0.01);
  /* box-shadow: 2px 2px 3px black; */
  border-radius: 2px;
`;

export { ProjectsWrapper, CardProject };
