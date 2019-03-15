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
  form: {
    ['errors']: string;
    ['touched']: boolean;
  };
  disabled: boolean;
  validationMessage: string;
  label: string;
  placeholderText: string;
  error: boolean;
  tooltipToggle?: any;
  focussed: boolean;
  iconRight?: any;
};


const styleVariables = loadStyleVariables();

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;

const Slider = styled.span<{
  error?: boolean;
  disabled?: boolean;
  focussed?: boolean;
}>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "o";
  border: ${props =>
    props.error
      ? `2px solid ${styleVariables.redGoogle}`
      : `2px solid ${styleVariables.greenDark}`};
  border-radius: 30px;
  transition: all 0.4s;

  background: ${props =>
    props.error ? `${styleVariables.red}` : `${styleVariables.green}`};
  &:checked {
    transform: translateX(20px);
    background-color: ${styleVariables.red};
  }
`;

const Input = styled.input<{
  error?: boolean;
  disabled?: boolean;
  focussed?: boolean;
}>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 30px;
  transition: all 0.4s;
  &:before {
    background-color: white;
    position: absolute;
    border: ${props =>
      props.error
        ? `2px solid ${styleVariables.redGoogle}`
        : `2px solid ${styleVariables.greenDark}`};
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
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LabelBeforeToffle = styled.label`
  width: 70%;
  line-height: 1.5em;
`

const Icon = styled.span`
  font-size: 1.5em;
`

export class FormikToggle extends React.Component<Props> {
  render() {
    const FieldName = this.props.field.name;
    const errors = this.props.form.errors[FieldName];
    const touched = this.props.form.touched[FieldName];

    const hasTooltip = this.props.tooltipToggle || this.props.iconRight;
    let toggleContent;

    if(hasTooltip && this.props.tooltipToggle){
      toggleContent = (
        <Div>
          <Icon>{this.props.tooltipToggle}</Icon>
          <LabelBeforeToffle>{this.props.label}</LabelBeforeToffle>
          <Toggle>
            <Slider
              error={this.props.error}
              disabled={this.props.disabled}
              focussed={this.props.focussed}
            />
            <Input
              {...this.props.field}
              type="checkbox"
              disabled={this.props.disabled}
              error={this.props.error}
            />
          </Toggle>
        </Div>
      );
    }

    if (hasTooltip && this.props.iconRight) {
      toggleContent = (
        <Div>
          <LabelBeforeToffle>{this.props.label}</LabelBeforeToffle>
          <Icon>{this.props.iconRight}</Icon>
          <Toggle>
            <Slider
              error={this.props.error}
              disabled={this.props.disabled}
              focussed={this.props.focussed}
            />
            <Input
              {...this.props.field}
              type="checkbox"
              disabled={this.props.disabled}
              error={this.props.error}
            />
          </Toggle>
        </Div>
      );
    }

    if (hasTooltip && this.props.iconRight && this.props.tooltipToggle) {
      toggleContent = (
        <Div>
          <Icon>{this.props.tooltipToggle}</Icon>
          <LabelBeforeToffle>{this.props.label}</LabelBeforeToffle>
          <Icon>{this.props.iconRight}</Icon>
          <Toggle>
            <Slider
              error={this.props.error}
              disabled={this.props.disabled}
              focussed={this.props.focussed}
            />
            <Input
              {...this.props.field}
              type="checkbox"
              disabled={this.props.disabled}
              error={this.props.error}
            />
          </Toggle>
        </Div>
      );
    }
    if (!hasTooltip) {
      toggleContent = (
        <Div>
          <LabelBeforeToffle>{this.props.label}</LabelBeforeToffle>
          <Toggle>
            <Slider
              error={this.props.error}
              disabled={this.props.disabled}
              focussed={this.props.focussed}
            />
            <Input
              {...this.props.field}
              type="checkbox"
              disabled={this.props.disabled}
              error={this.props.error}
            />
          </Toggle>
        </Div>
      );
    }
    return (
      <div>

        {toggleContent}

        {touched && errors && <div className="error">{errors}</div>}
      </div>
    );
  }
}
