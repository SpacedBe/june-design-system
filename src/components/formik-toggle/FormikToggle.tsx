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

const ToggleInput = styled.input<{ checked?: boolean; value?: any, changeChecked?: void }>`
  z-index: 200;
  opacity: 0;
  width: 40px;
  height: 15px;
  position: absolute;
  &:checked ~ label span {
    transform: translatex(30px);
    transition: transform 0.2s ease-in;
  }
  &:checked ~ label{
    background: ${styleVariables.green};
    border: 2px solid ${styleVariables.greenDark};
    transition: transform 0.2s ease-in;
  }

  &:checked ~ label p{
    opacity: 1;
    content: I;
    transform: translateX(-20px);
    color: ${styleVariables.colorWhite};
  }
`;
const Label = styled.label<{ checked?: boolean; value?: any, changeChecked?: void}>`
  display: inline-block;
  width: 40px;
  height: 15px;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  background: ${styleVariables.grayLight};
  border: 2px solid ${ styleVariables.gray };

`;
const Switch = styled.span<{ checked?: boolean; value?: any, changeChecked?: void}>`
  position: absolute;
  width: 25px;
  height: 25px;
  left: -10px;
  top: -7px;
  border-radius: 25px;
  background: ${styleVariables.colorWhite};
  border: 2px solid ${ styleVariables.gray };
  transition: transform 0.2s ease-in;
`;

const Content = styled.p`
  opacity: 0.5;
  margin-top: 0.5px;
  margin-left: 25px;
  font-size: 12px;
  color: ${styleVariables.grayDark};
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
            <div>
            <ToggleInput id="toggle"
              {...this.props.field}
              type="checkbox"
              value={this.props.checked}
              onChange={this.handleChange}
            />
            <Label id="label"
              value={this.props.checked}
              onChange={this.handleChange}>
              <Switch id="switch"
                value={this.props.checked}
                onChange={this.handleChange}
              ></Switch>
              <Content>O</Content>
            </Label>
            </div>
        </Div>
      );
    }

    if (hasTooltip && this.props.tooltipToggle) {
      toggleContent = (
        <Div>
          <Icon>{this.props.tooltipToggle}</Icon>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
          <div>
            <ToggleInput id="toggle"
              {...this.props.field}
              type="checkbox"
              value={this.props.checked}
              onChange={this.handleChange}
            />
            <Label id="label"
              value={this.props.checked}
              onChange={this.handleChange}>
              <Switch id="switch"
                value={this.props.checked}
                onChange={this.handleChange}
              ></Switch>
              <Content>O</Content>
            </Label>
          </div>
        </Div>
      );
    }

    if (hasTooltip && this.props.iconRight) {
      toggleContent = (
        <Div>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
          <Icon>{this.props.iconRight}</Icon>
          <div>
            <ToggleInput id="toggle"
              {...this.props.field}
              type="checkbox"
              value={this.props.checked}
              onChange={this.handleChange}
            />
            <Label id="label"
              value={this.props.checked}
              onChange={this.handleChange}>
              <Switch id="switch"
                value={this.props.checked}
                onChange={this.handleChange}
              ></Switch>
              <Content>O</Content>
            </Label>
          </div>
        </Div>
      );
    }

    if (hasTooltip && this.props.iconRight && this.props.tooltipToggle) {
      toggleContent = (
        <Div>
          <Icon>{this.props.tooltipToggle}</Icon>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
          <Icon>{this.props.iconRight}</Icon>
          <div>
            <ToggleInput id="toggle"
              {...this.props.field}
              type="checkbox"
              value={this.props.checked}
              onChange={this.handleChange}
            />
            <Label id="label"
              value={this.props.checked}
              onChange={this.handleChange}>
              <Switch id="switch"
                value={this.props.checked}
                onChange={this.handleChange}
              ></Switch>
              <Content>O</Content>
            </Label>
          </div>
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
