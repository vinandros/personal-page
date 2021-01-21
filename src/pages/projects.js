import styled from "@emotion/styled";
import React from "react";
import Layout from "../components/Layouts/Layout";
import BREAKPOINT from "../components/Media";
import Project from "../components/projects/Project";
import { MainTitle } from "../components/Titles";
import projectsData from "../data/data";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${BREAKPOINT.md}) {
    grid-template-columns: 2fr 2fr;
    margin-top: 2rem;
    grid-gap: 7rem 5rem;
  }
`;

export default function projects() {
  return (
    <Layout title="Projects">
      <MainTitle>Projects</MainTitle>

      <Main>
        {projectsData.map((projectData) => (
          <Project key={projectData.id} project={projectData} />
        ))}
      </Main>
    </Layout>
  );
}
