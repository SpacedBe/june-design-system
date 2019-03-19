/**
 * @class FormikToggle
 */

import * as React from "react";
import styled from "styled-components";
import { loadStyleVariables } from "../../scripts/loadStyleVariables";

type Props = {
  field: {
    name: string;
  };
  validationMessage: string;
  label: string;
  placeholderText: string;
  tooltipToggle?: any;
  focussed: boolean;
  iconRight?: any;
  checked?: boolean;
  value?: any;
  changeChecked?: any;
  onCheckedChange: any;
};

const styleVariables = loadStyleVariables();

const Toggle = styled.div<{ checked?: boolean }>`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid ${styleVariables.gray};
    color: ${styleVariables.colorWhite};
    background: ${styleVariables.grayLight};
    border-radius: 30px;
    transition: all 0.4s;
    :after {
      top: 2px;
      left: 5px;
      font-size: 10px;
      content: "O";
      visibility: visible;
      display: block;
      position: absolute;
      transform: translateX(20px);
    }
  }
  input:checked + span {
    background: ${styleVariables.green};
    border: 2px solid ${styleVariables.greenDark};
    :after {
      content: "I";
      visibility: visible;
      display: block;
      position: absolute;
      transform: translateX(2px);
    }
  }
`;

const Input = styled.input<{ checked?: boolean; value?: any, changeChecked?: void}>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  border-radius: 30px;
  transition: all 0.4s;
  &:before {
    background-color: ${styleVariables.colorWhite};
    position: absolute;
    border: 2px solid ${styleVariables.gray};
    content: "";
    width: 25px;
    height: 25px;
    left: -6px;
    top: -7px;
    border-radius: 24px;
    transition: all 0.4s;
  }
  &:checked {
    transform: translateX(20px);
  }
  &:checked:before {
    border: 2px solid ${styleVariables.greenDark};
  }
`;

const Div = styled.div<{ checked?: boolean; onChange?: void }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const LabelBeforeToggle = styled.label`
  width: 70%;
  line-height: 1.5em;
`

const Icon = styled.span`
  font-size: 1.5em;
`

export class FormikToggle extends React.Component<Props> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: any) {
    this.props.onCheckedChange(e.target.value);
  }

  render() {
    const hasTooltip = this.props.tooltipToggle || this.props.iconRight;
    let toggleContent;

    if (!hasTooltip) {
      toggleContent = (
        <Div>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
          <Toggle>
            <Input
              {...this.props.field}
              type="checkbox"
              value={this.props.checked}
              onChange={this.handleChange}
            />
            <span></span>
          </Toggle>
        </Div>
      );
    }

    if (hasTooltip && this.props.tooltipToggle) {
      toggleContent = (
        <Div>
          <Icon>{this.props.tooltipToggle}</Icon>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
          <Toggle>
            <Input
              {...this.props.field}
              type="checkbox"
              value={this.props.checked}
              onChange={this.handleChange}
            />
            <span></span>
          </Toggle>
        </Div>
      );
    }

    if (hasTooltip && this.props.iconRight) {
      toggleContent = (
        <Div>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
          <Icon>{this.props.iconRight}</Icon>
          <Toggle>
            <Input
              {...this.props.field}
              type="checkbox"
              value={this.props.checked}
              onChange={this.handleChange}
            />
            <span></span>
          </Toggle>
        </Div>
      );
    }

    if (hasTooltip && this.props.iconRight && this.props.tooltipToggle) {
      toggleContent = (
        <Div>
          <Icon>{this.props.tooltipToggle}</Icon>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
          <Icon>{this.props.iconRight}</Icon>
          <Toggle>
            <Input
              {...this.props.field}
              type="checkbox"
              value={this.props.checked}
              onChange={this.handleChange}
            />
            <span></span>
          </Toggle>
        </Div>
      );
    }
    return (
      <div >
        {toggleContent}
      </div>
    );
  }
}
