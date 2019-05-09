/**
 * @class FormikRadiobutton
 */

import React from 'react';
import styled from 'styled-components';
import {getIn} from 'formik';

type Props = {
  field: {
    name: string;
    value: string;
    disabled: boolean;
    onChange: () => {};
    OnBlur: () => {};
  };
  form: {
    ['errors']: string;
    ['touched']: boolean;
  };
  tooltip?: any;
  ['serverErrors']: string;
  label: string,
  validationMessage: string;
  checked: boolean;
  placeholderText: string;
  error: boolean;
  required?: boolean;
  disabled?: boolean;
  value: string;
};

const Input = styled.input`
  pointer-events: none;
  opacity: 0;
  z-index: var(--zi-200);
  position: absolute;
  margin: 0;

  &:checked ~ span {
    opacity: 1;
  }
`;

const RoundStyled = styled.div<{ error?: boolean, disabled?: boolean }>`
  margin-right: var(--spacing-m);
  border-radius: 50%;
  background-color: var(--color-white);
  border: ${props => {
  if (props.disabled) {
    return `2px solid var(--color-disabled)`;
  }

  if (props.error) {
    return `2px solid var(--color-error)`;
  }

  return `2px solid var(--color-primary)`;
}};
`;

const FillingStyled = styled.span<{ error?: boolean, disabled?: boolean }>`
  display: block;
  margin: 2px;
  width: 1.1em;
  height: 1.1em;
  opacity: 0;
  border-radius: 50%;
  position: relative;
  background-color: ${props => {
  if (props.disabled) {
    return `var(--color-disabled)`;
  }

  if (props.error) {
    return `var(--color-error)`;
  }

  return `var(--color-primary)`;
}};
`;

const LabelStyled = styled.label<{ error?: boolean, disabled?: boolean }>`
  cursor: ${props => props.disabled ? 'initial' : 'pointer'};
  display: flex;
  align-items: center;
  position: relative;
  font-family: var(--font-secondary);
  font-size: var(--font-size-m);
  text-align: left;
  color: ${props => {
  if (props.disabled) {
    return `var(--color-disabled)`;
  }

  if (props.error) {
    return `var(--color-error)`;
  }
  
  return `var(--color-dark)`;
}};
  margin-right: var(--spacing-s);
`;

const WrapperStyled = styled.div`
  padding: var(--spacing-sm) 0px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: auto;
`;

export class FormikRadiobutton extends React.Component<Props> {
  render() {
    const {name, value} = this.props.field;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = touched ? (this.props.serverErrors && this.props.serverErrors[name]) || error : null;
    const {disabled, label} = this.props;
    const checked = this.props.value == value;
    let tooltip;

    if(this.props.tooltip){
      tooltip = (
        <span>{this.props.tooltip}</span>
      );
    }

    return (
      <WrapperStyled>
        <LabelStyled error={!!errors} disabled={disabled}>
          <RoundStyled error={!!errors} disabled={disabled}>
            <Input
              name={this.props.field.name}
              value={this.props.value}
              disabled={this.props.field.disabled}
              onChange={this.props.field.onChange}
              checked={checked}
              type='radio'
            />
            <FillingStyled error={errors} disabled={disabled}/>
          </RoundStyled>
          <span dangerouslySetInnerHTML={{__html: label}}/>
        </LabelStyled>
        {tooltip}
      </WrapperStyled>
    );
  }
}
