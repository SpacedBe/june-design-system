/**
 * @class FormikCheckbox
 */

import React from 'react';
import styled from "styled-components";
import {getIn} from 'formik';

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

  label: string,
  validationMessage: string;
  checked: boolean;
  placeholderText: string;
  error: boolean,
  required?: boolean,
  disabled?: boolean,
};

const WrapperStyled = styled.div`
  text-align: left;
`;

const Input = styled.input`
  opacity: 0;
  z-index: var(--zi-200);
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;
  &:checked ~ span{
    opacity: 1;
  }
`;

const CheckedFilling = styled.span<{ error?: boolean, disabled?: boolean }>`
  display: inline-block;
  margin: 2px;
  width: 15px;
  height: 15px;
  opacity: 0;
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

const CheckBoxWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  text-align: left;
  margin-bottom: var(--spacing-m);
`;

const Checkbox = styled.div<{ error?: boolean, disabled?: boolean }>`
  width: 23px;
  height: 23px;
  border-radius: 15%;
  top: 0px;
  left: 0px;
  display: inline-block;
  visibility: visible;
  background-color: var(--color-white);
  border: ${props =>{
  if (props.disabled) {
    return `2px solid var(--color-disabled)`;
  }
  if (props.error) {
    return `2px solid var(--color-error)`;
  }

  return `2px solid var(--color-primary)`;
}}
`;

const Label = styled.label<{ error?: boolean, disabled?: boolean }>`
  margin-left: var(--spacing-m);
  position: relative;
  font-family: var(--font-secondary);
  font-size: var(--font-size-m);
  color: ${props => {
  if (props.disabled) {
    return `var(--color-disabled)`;
  }
  if (props.error) {
    return `var(--color-error)`;
  }

  return `var(--color-dark)`;
}};
  text-align: left;
`;

export class FormikCheckbox extends React.Component<Props> {
  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = touched ? (this.props.serverErrors && this.props.serverErrors[name]) || error : null;

    return (
      <WrapperStyled>
        <CheckBoxWrapperStyled>
          <Checkbox error={!!errors} disabled={this.props.disabled}>
            <Input
              {...this.props.field}
              disabled={this.props.disabled}
              checked={this.props.field.value}
              id={name}
              type="checkbox"/>
            <CheckedFilling error={!!errors} disabled={this.props.disabled}/>
          </Checkbox>
          <Label htmlFor={name} dangerouslySetInnerHTML={{__html: label}} error={!!errors} disabled={this.props.disabled}></Label>
        </CheckBoxWrapperStyled>
      </WrapperStyled>
    );
  }
}
