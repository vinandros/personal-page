import styled from "@emotion/styled";
import { Link } from "gatsby";

const ProjectsLink = styled(Link)`
  border-bottom: 2px solid var(--secondary-color);
  display: inline-block;
  width: auto;
  p {
    font-weight: bold;
    font-style: oblique;
    padding: 10px 0;
  }
`;

const OutlineButtom = styled.a`
  display: inline-block;
  cursor: pointer;
  border: 0;
  line-height: 1;
  padding-bottom: 0.2em;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  & span {
    font-family: inherit;
    font-weight: 800;
  }
`;

const ProjectLink = styled(OutlineButtom)`
  border-bottom: 2px solid black;
  &:hover {
    border-bottom: 2px solid var(--secondary-color);
  }
`;

export { ProjectLink, ProjectsLink };
