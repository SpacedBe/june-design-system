/**
 * @class FormikToggle
 */

import * as React from "react";
import styled from "styled-components";
import {loadStyleVariables} from "../../scripts/loadStyleVariables";

type Props = {
  field: {
    name: string;
  };

  validationMessage: string;
  label: string;
  placeholderText: string;
  tooltip?: any;
  focused: boolean;
  icon?: any;
};

const styleVariables = loadStyleVariables();

const ToggleInput = styled.input<{}>`
  z-index: ${styleVariables.ziCheckbox};
  opacity: 0;
  width: 40px;
  height: 15px;
  position: absolute;
  &:checked ~ label span {
    transform: translatex(30px);
    transition: transform ${styleVariables.transitionspeedNormal} ease-in;
  }
  &:checked ~ label {
    background: ${styleVariables.colorGreen};
    border: 2px solid ${styleVariables.greenDark};
    transition: transform ${styleVariables.transitionspeedNormal} ease-in;
  }

  &:checked ~ label p {
    opacity: 1;
    content: I;
    transform: translateX(-20px);
    color: ${styleVariables.colorWhite};
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 40px;
  height: 15px;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  background: ${styleVariables.colorGrayLight};
  border: 2px solid ${styleVariables.colorGray};
  font-family: ${styleVariables.fontSecondary};
  font-size: ${styleVariables.fontSizeL};
`;

const Switch = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  left: -10px;
  top: -7px;
  border-radius: 25px;
  background: ${styleVariables.colorWhite};
  border: 2px solid ${styleVariables.colorGray};
  transition: transform ${styleVariables.transitionspeedNormal} ease-in;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`;

const LabelBeforeToggle = styled.label`
  display: inline;
  width: 70%;
  line-height: 1.5em;
  font-family: ${styleVariables.fontSecondary};
  font-size: ${styleVariables.fontSizeL};
`;

const Icon = styled.span`
  font-size: 1.5em;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-flow: row;
  width: 50%;
`;

export class FormikToggle extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let tooltip;

    if (!this.props.tooltip && !this.props.icon) {
      tooltip = (<LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>);
    }

    if (this.props.tooltip) {
      tooltip = (
        <div>
          <Icon>{this.props.tooltip}</Icon>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
        </div>
      );
    }

    if (this.props.icon && this.props.tooltip) {
      tooltip = (
        <FlexDiv>
          <Icon>{this.props.tooltip}</Icon>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
          <Icon>{this.props.icon}</Icon>
        </FlexDiv>
      );
    }

    return (
      <div>
        <Div>
          {tooltip}

          <div>
            <ToggleInput
              {...this.props.field}
              type="checkbox"
            />

            <Label>
              <Switch></Switch>
            </Label>
          </div>
        </Div>
      </div>
    );
  }
}
