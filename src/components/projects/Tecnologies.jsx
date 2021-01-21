import styled from "@emotion/styled";
import React from "react";
import Bootstrap from "../Icons/Bootstrap";
import CSS3 from "../Icons/CSS3";
import Emotion from "../Icons/Emotion";
import Git from "../Icons/Git";
import Html5 from "../Icons/Html5";
import ES6 from "../Icons/ES6";
import Mongo from "../Icons/Mongo";
import Next from "../Icons/Next";
import Node from "../Icons/Node";
import Reactjs from "../Icons/Reactjs";
import Redux from "../Icons/Redux";
import Gatsbyjs from "../Icons/Gatsbyjs";
import PropTypes from "prop-types";
import Webpack from "../Icons/Webpack";
import Sass from "../Icons/Sass";
import Babel from "../Icons/Babel";
import D3 from "../Icons/D3";

const TecnologyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  & div {
    margin: 0 1rem 1rem 0;
  }
`;

const Tecnologies = ({ tecnologies }) => {
  return (
    <TecnologyWrapper>
      {tecnologies.map((tecnology) => {
        switch (tecnology.tecnology) {
          case "html":
            return <Html5 key={tecnology.id} />;
          case "css":
            return <CSS3 key={tecnology.id} />;
          case "javascript":
            return <ES6 key={tecnology.id} />;
          case "git":
            return <Git key={tecnology.id} />;
          case "bootstrap":
            return <Bootstrap key={tecnology.id} />;
          case "emotion":
            return <Emotion key={tecnology.id} />;
          case "react":
            return <Reactjs key={tecnology.id} />;
          case "redux":
            return <Redux key={tecnology.id} />;
          case "next":
            return <Next key={tecnology.id} />;
          case "gatsby":
            return <Gatsbyjs key={tecnology.id} />;
          case "mongo":
            return <Mongo key={tecnology.id} />;
          case "node":
            return <Node key={tecnology.id} />;
          case "webpack":
            return <Webpack key={tecnology.id} />;
          case "babel":
            return <Babel key={tecnology.id} />;
          case "sass":
            return <Sass key={tecnology.id} />;
          case "d3":
            return <D3 key={tecnology.id} />;
          default:
            return null;
        }
      })}
    </TecnologyWrapper>
  );
};

Tecnologies.propTypes = {
  tecnologies: PropTypes.array,
};

export default Tecnologies;
