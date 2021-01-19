import GatsbyImage from "gatsby-image";
import styled from "@emotion/styled";

export default styled(GatsbyImage)`
  max-width: 900px;
  max-height: 900px;
  border-radius: 3px;
  background-color: white;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.02);
  }
`;
