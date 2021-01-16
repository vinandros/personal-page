import styled from "@emotion/styled";

const TextBaseStyle = styled.p`
  color: var(--paragraph-color);
  opacity: 0.87;
`;

const SimpleText = styled(TextBaseStyle)`
  font-size: clamp(0.8rem, 0.8rem + 1vw, 1.8rem);
`;

export default styled(TextBaseStyle)`
  font-size: clamp(1rem, 1rem + 1vw, 1.8rem);
  margin-bottom: 1.5rem;
`;

export { SimpleText };
