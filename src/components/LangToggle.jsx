import styled from "@emotion/styled";
import React from "react";
import LangContext from "../context/langContext/langContext";

const SwitchContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: var(--switch-bg);
  .label-text {
    margin-left: 16px;
  }
`;

const Indicator = styled.div`
  height: 100%;
  width: 200%;
  background: var(--switch-bg);
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow: -8px -4px 8px 0px var(--switch-primary-sc),
    8px 4px 12px 0px var(--switch-secondary-sc);
  ${(props) => (props.checked ? "transform: translate3d(25%, 0, 0);" : "")}
`;

const ToggleStateInput = styled.input`
  display: none;
  &:checked ~ ${Indicator} {
    transform: translate3d(25%, 0, 0);
  }
`;

const Toggle = styled.div`
  isolation: isolate;
  position: relative;
  background-color: var(--switch-bg);
  height: 30px;
  width: 60px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: -8px -4px 8px 0px var(--switch-primary-sc),
    8px 4px 12px 0px var(--switch-secondary-sc),
    4px 4px 4px 0px var(--switch-secondary-sc) inset,
    -4px -4px 4px 0px var(--switch-secondary-sc) inset;
`;

const LangToggle = () => {
  const { toggleLang } = React.useContext(LangContext);
  const [indicatorState, setIndicatorState] = React.useState(false);
  const handleChange = () => {
    setIndicatorState(indicatorState ? false : true);
    toggleLang();
  };
  return (
    <SwitchContainer>
      <Toggle>
        <ToggleStateInput
          type="checkbox"
          checked={indicatorState}
          name="checkbox"
          onChange={handleChange}
        />
        <Indicator />
      </Toggle>
    </SwitchContainer>
  );
};

export default LangToggle;
