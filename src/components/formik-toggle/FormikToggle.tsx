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

  iconOn?: any;
  iconOff?: any;

  checked?: boolean;
  checkedTooltip?: boolean;
  checkedIconTooltip?: boolean;

  value?: any;
  changeChecked?: any;

  onCheckedChange: any;
  onCheckedChangeTooltip: any;
  onCheckedChangeIconTooltip: any;
};

const styleVariables = loadStyleVariables();

const ToggleInput = styled.input<{
  value?: any;
  onCheckedChange?: void;
  onCheckedChangeTooltip?: void;
  onCheckedChangeIconTooltip?: void;
}>`
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

const Content = styled.p`
  opacity: 0.5;
  margin-top: 0.5px;
  margin-left: 25px;
  font-size: 12px;
  color: ${styleVariables.colorGrayDark};
`;

const Div = styled.div`
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
    this.handleChangeTooltip = this.handleChangeTooltip.bind(this);
    this.handleChangeIconTooltip = this.handleChangeIconTooltip.bind(this);
  }

  handleChange(e: any) {
    this.props.onCheckedChange(e.target.value);
  }

  handleChangeTooltip(e: any){
    this.props.onCheckedChangeTooltip(e.target.value);
  }

  handleChangeIconTooltip(e: any){
    this.props.onCheckedChangeIconTooltip(e.target.value);
  }

  render() {
    const hasTooltip = this.props.tooltipToggle || this.props.iconRight;
    let toggleContent;

    if (!hasTooltip) {
      toggleContent = (
        <Div>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
            <div>
            <ToggleInput
              {...this.props.field}
              type="checkbox"
              value={this.props.checked}
              onChange={this.handleChange}
            />
            <Label>
              <Switch></Switch>
              <Content>{this.props.iconOff}</Content>
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
            <ToggleInput
              {...this.props.field}
              type="checkbox"
              value={this.props.checkedTooltip}
              onChange={this.handleChangeTooltip}
            />
            <Label>
              <Switch/>
               <Content>{this.props.iconOff}</Content>
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
            <ToggleInput
              {...this.props.field}
              type="checkbox"
              value={this.props.checkedIconTooltip}
              onChange={this.handleChangeIconTooltip}
            />
            <Label>
              <Switch />
              <Content>{this.props.iconOff}</Content>
            </Label>
          </div>
        </Div>
      );
    }
    return (
      <div>
        {toggleContent}
      </div>
    );
  }
}
