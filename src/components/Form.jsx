import styled from "@emotion/styled";
import BREAKPOINT from "./Media";
import Paragraph from "./Paragraph";

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  margin-top: 5rem;
  @media (max-width: ${BREAKPOINT.md}) {
    width: 100%;
  }
`;

const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
  @media (max-width: ${BREAKPOINT.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  height: 2rem;
  width: 100%;
  border-style: none;
  font-size: clamp(0.8rem, 0.8rem + 1vw, 1rem);
  border-bottom: 3px solid var(--secondary-color);
  margin-bottom: 2rem;
  box-shadow: none;
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

  &:focus:invalid {
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
  font-family: inherit;
  margin-top: 1rem;
  &:focus {
    outline: 3px solid var(--secondary-color);
  }
  &:focus:invalid {
    box-shadow: none;
    outline: 3px solid red;
  }
  & > strong {
    color: black;
  }
`;
const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${BREAKPOINT.md}) {
    grid-template-columns: 2fr 2fr;
  }
`;

const TextContact = styled(Paragraph)`
  width: 90%;
  margin-top: 2rem;
  @media (min-width: ${BREAKPOINT.md}) {
    margin-top: 5rem;
    width: 70%;
  }
`;

const Label = styled.label`
  visibility: hidden;
  position: absolute;
`;

export {
  TextContact,
  FormWrapper,
  Form,
  Input,
  SubmitBottom,
  TextArea,
  FormGroup,
  Label,
};
