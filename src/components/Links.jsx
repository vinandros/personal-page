import styled from "@emotion/styled";
import { Link } from "gatsby";

const ProjectsLink = styled(Link)`
  display: inline-block;
  width: auto;
  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-weight: 800;
    border-bottom: 2px solid var(--secondary-color);
    padding: 10px 0;
    text-transform: uppercase;
  }
`;

const OutlineButtom = styled.a`
  display: inline-block;
  cursor: pointer;
  border: 0;
  line-height: 1;
  padding-bottom: 0.2em;
  font-weight: bold;
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
