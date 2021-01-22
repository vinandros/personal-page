import React from "react";
import PropTypes from "prop-types";
import { CardProject } from "../Projects";
import { ProjectLink } from "../Links";
import { ProjectTitle } from "../Titles";
import ProjectImg from "./ProjectImg";
import Tecnologies from "./Tecnologies";
import styled from "@emotion/styled";

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const Description = styled.p`
  line-height: 1.6;
  color: var(--paragraph-color);
  opacity: 0.87;
  font-size: clamp(1rem, 1rem + 1vw, 1.5rem);
  text-align: justify;
`;

const Project = ({ project }) => {
  return (
    <CardProject>
      <a
        href={project.siteUrl}
        target="_blank"
        referrerPolicy="no-referrer"
        rel="noopener noreferrer"
        aria-label={project.title}
      >
        <ProjectImg filename={project.imgName} alt={project.altImg} />
      </a>
      <ProjectTitle>{project.title}</ProjectTitle>
      <Tecnologies tecnologies={project.tecnologies} />
      <Description>{project.description}</Description>
      <CardFooter>
        <ProjectLink
          href={project.githubUrl}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
        >
          <p>
            Github <span>{">"}</span>
          </p>
        </ProjectLink>
        <ProjectLink
          href={project.siteUrl}
          target="_blank"
          referrerPolicy="no-referrer"
          rel="noopener noreferrer"
        >
          <p>
            View site <span>{">"}</span>
          </p>
        </ProjectLink>
      </CardFooter>
    </CardProject>
  );
};

Project.protoTypes = {
  project: PropTypes.object,
};

export default Project;
