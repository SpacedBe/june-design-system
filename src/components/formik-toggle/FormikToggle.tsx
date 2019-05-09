/**
 * @class FormikToggle
 */

import React from 'react';
import styled from 'styled-components';
import {IconOff, IconOn} from '../../icons';
import {getIn} from "formik";

type Props = {
  field: {
    name: string;
    value: any;
  };

  form: {
    ['errors']: string;
    ['touched']: boolean;
  };

  ['serverErrors']: string;
  tooltip?: any;
  label: string,
  validationMessage: string;
  checked: boolean;
  placeholderText: string;
  error: boolean,
  required?: boolean,
  icon?: any,
  disabled?: boolean,
};

const ToggleInputStyled = styled.input<{disabled?: boolean, error?: boolean}>`
  z-index: var(--zi-200);
  opacity: 0;
  margin: -10px;
  width: 60px;
  height: 35px;
  cursor: pointer;
  position: absolute;

  &:checked ~ label span {
    transform: translatex(30px);
    transition: transform var(--transition-speed-normal) ease-in;
    border: 2px solid ${props => {
      if (props.disabled) {
        return `var(--color-gray-lighter)`;
      }
      if (props.error) {
        return `var(--color-error)`;
      }
    
      return `var(--color-primary-shade)`;
    }};
  }

  &:checked ~ label {
    background-color: ${props => {
      if (props.disabled) {
        return `var(--color-gray-lighter)`;
      }
      if (props.error) {
        return `var(--color-error)`;
      }
    
      return `var(--color-primary)`;
    }};
    border: 2px solid ${props => {
      if (props.disabled) {
        return `var(--color-gray-lighter)`;
      }
      if (props.error) {
        return `var(--color-error)`;
      }
    
      return `var(--color-primary-shade)`;
    }};;
    transition: transform var(--transition-speed-normal) ease-in;
  }

  &:checked ~ label p {
    opacity: 1;
    transform: translateX(-20px);
    color: var(--color-white);
  }
`;

const ToggleStyled = styled.label<{error?: boolean, disabled?: boolean }>`
  display: inline-block;
  width: 40px;
  height: 18px;
  border-radius: 30px;
  position: relative;
  background-color: ${props => {
  if (props.disabled) {
    return `var(--color-gray-lighter)`;
  }
  if (props.error) {
    return `var(--color-error)`;
  }

  return `var(--color-gray-light)`;
}};
  
  border: 2px solid ${props => {
  if (props.disabled) {
    return `var(--color-gray-lighter)`;
  }
  if (props.error) {
    return `var(--color-error)`;
  }

  return `var(--color-gray)`;
}};
  
  font-family: var(--font-secondary);
  font-size: var(--font-size-l);

  :after {
    top: -2px;
    left: 4px;
    font-size: 10px;
    visibility: visible;
    display: block;
    color: var(--color-white);
    position: absolute;
    transform: translateX(20px);
  }
`;

const SwitchStyled = styled.span<{ error?: boolean, disabled?: boolean }>`
  position: absolute;
  width: 25px;
  height: 25px;
  left: -10px;
  top: -5px;
  border-radius: 25px;
  background-color: var(--color-white);
  border: 2px solid ${props => {
  if (props.disabled) {
    return `var(--color-gray-lighter)`;
  }
  if (props.error) {
    return `var(--color-error)`;
  }

  return `var(--color-gray)`;
}};
  transition: transform var(--transition-speed-normal) ease-in;
`;

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TooltipWrapperStyled = styled.div`
  margin-right: var(--spacing-s);
  display: flex;
  align-items: center;
`;

const TooltipIconStyled = styled.span`
  font-size: var(--icon-size-xs);
  line-height: 0;
  margin-right: var(--spacing-s);
`;

const LabelStyled = styled.label<{ error?: boolean, disabled?: boolean }>`
  display: flex;
  font-family: var(--font-secondary);
  font-size: var(--font-size-l);
  margin-right: var(--spacing-s);
  color: ${props => {
  if (props.disabled) {
    return `var(--color-disabled)`;
  }
  if (props.error) {
    return `var(--color-error)`;
  }

  return `var(--color-dark)`;
}};
`;

const LabelIconStyled = styled.span`
  display: flex;
  font-size: var(--icon-size-xl);
`;

const IconOnStyled = styled(IconOn)`
  font-size: 8px;
  position: relative;
  margin: 5px;
  bottom: 10%;
  font-weight: var(--font-weight-normal);
  fill: var(--color-white);
`;

const IconOffStyled = styled(IconOff)`
  font-size: 8px;
  position: relative;
  margin: 5px;
  bottom: 15%;
  font-weight: var(--font-weight-normal);
  fill: var(--color-white);
`;

const RowStyled = styled.div`
  margin-bottom: var(--spacing-m);
  padding-bottom: var(--spacing-m);
  border-bottom: 1px solid #DFF2F2;
`;

export class FormikToggle extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const name = this.props.field.name;
    const tooltip = this.props.tooltip && <TooltipIconStyled>{this.props.tooltip}</TooltipIconStyled>;
    const labelIcon = this.props.icon && <LabelIconStyled>{this.props.icon}</LabelIconStyled>;
    const fieldError = getIn(this.props.form.errors, name);
    const formError = (this.props.serverErrors && this.props.serverErrors[name]) || fieldError;

    return (
      <RowStyled>
        <WrapperStyled>
          <TooltipWrapperStyled>
            {tooltip}
            <LabelStyled error={formError} disabled={this.props.disabled}>{this.props.label}</LabelStyled>
            {labelIcon}
          </TooltipWrapperStyled>

          <div style={{position: 'relative'}}>
            <ToggleInputStyled
              {...this.props.field}
              checked={this.props.field.value}
              disabled={this.props.disabled}
              error={formError}
              type='checkbox'/>

            <ToggleStyled disabled={this.props.disabled} error={formError}>
              <IconOnStyled/>
              <SwitchStyled disabled={this.props.disabled} error={formError}/>
              <IconOffStyled/>
            </ToggleStyled>
          </div>
        </WrapperStyled>
      </RowStyled>
    );
  }
}
