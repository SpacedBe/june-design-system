/**
 * @class FormikRadiobutton
 */

import * as React from 'react';
import styled from "styled-components";
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
  ['serverErrors']: string;
  label: string,
  validationMessage: string;
  checked: boolean;
  placeholderText: string;
  error: boolean;
  required?: boolean;
  value: string;
};

const Input = styled.input`
  opacity: 0;
  z-index: var(--zi-200);
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;

  &:checked ~ span {
    opacity: 1;
  }
;`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Round = styled.div<{ error?: boolean }>`
  width: 21px;
  height: 21px;
  border-radius: 15px;
  top: 0px;
  left: 0px;
  position: absolute;
  content: '';
  display: inline-block;
  visibility: visible;
  background-color: var(--color-white);
  border: ${props =>
    props.error
      ? `2px solid var(--color-error)`
      : `2px solid var(--color-primary)`};
`;

const Span = styled.span<{ error?: boolean }>`
  display: inline-block;
  margin: 3px;
  width: 15px;
  height: 15px;
  opacity: 0;
  border-radius: 30px;
  position: relative;
  background-color: ${props =>
    props.error ? `var(--color-error)` : `var(--color-primary)`};
`;

const Label = styled.label<{ error?: boolean }>`
  margin-left: 35px;
  font-family: var(--font-secondary);
  font-size: var(--font-size-m);
  color: ${props =>
    props.error ? `var(--color-error)` : `var(--color-dark)`};
`;

export class FormikRadiobutton extends React.Component<Props> {
  render() {
    const {name, value} = this.props.field;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = (this.props.serverErrors && this.props.serverErrors[name]) || error;
    const checked = this.props.value == value;

    return (
      <div>
        <InputDiv>
          <Round error={!!errors}>
            <Input
              name={this.props.field.name}
              value={this.props.value}
              disabled={this.props.field.disabled}
              onChange={this.props.field.onChange}
              checked={checked}
              type="radio"
            />
            <Span error={errors} />
          </Round>
          <Label>{label}</Label>
        </InputDiv>
        {
          touched && errors && <div>{errors}</div>
        }
      </div>

    );
  }
}
