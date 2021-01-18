import styled from "@emotion/styled";
import BREAKPOINT from "./Media";

const Form = styled.form`
  width: 50%;
  margin-top: 3rem;
  @media (max-width: ${BREAKPOINT.md}) {
    width: 100%;
  }
`;

const FromGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  @media (max-width: ${BREAKPOINT.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  height: 3rem;
  width: 100%;
  border-style: none;
  font-size: clamp(0.8rem, 0.8rem + 1vw, 1rem);
  border-bottom: 3px solid var(--secondary-color);
  margin-bottom: 1rem;

  &:focus::placeholder {
    color: transparent;
  }
  &::placeholder {
    font-weight: bold;
  }
  &:focus {
    border-bottom: 3px solid var(--secondary-color);
    outline: none;
  }
  &:invalid {
    box-shadow: none;
    border-bottom: 3px solid red;
  }
`;

const SubmitBottom = styled.button`
  display: block;
  width: 100%;
  height: 2.5rem;
  margin-top: 2rem;
  border: none;
  font-weight: bold;
  color: var(--paragraph-color);
  cursor: pointer;
  transition: background-color ease-in 0.5s;
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  outline: 2px solid var(--secondary-color);
  border: none;
  margin-top: 1rem;
  &:focus {
    outline: 3px solid var(--secondary-color);
  }
`;

export { Form, Input, SubmitBottom, TextArea, FromGroup };
