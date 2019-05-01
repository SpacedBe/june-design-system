/**
 * @class FormikRadiobutton
 */

import * as React from 'react';
import styled from 'styled-components';
import {getIn} from 'formik';
import Color from "../../helpers/color";

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

const colorHelper = new Color();

const Input = styled.input`
  opacity: 0;
  z-index: var(--zi-200);
  position: absolute;
  cursor: pointer;
  margin: 0;
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
  width: 23px;
  height: 23px;
  border-radius: 15px;
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
  margin: 2px;
  width: 15px;
  height: 15px;
  opacity: 0;
  border-radius: 30px;
  position: relative;
  background-color: ${props =>
    props.error
      ? `var(--color-error)`
      : `var(--color-primary)`};
`;

const Label = styled.label<{ error?: boolean }>`
  margin-left: var(--spacing-s);
  position: relative;
  font-family: var(--font-secondary);
  font-size: var(--font-size-m);
  color: ${props =>
    props.error
      ? `var(--color-error)`
      : `var(--color-dark)`};
  text-align: left;
`;

const ErrorMessageStyled = styled.span`
  font-size: var(--font-size-s);
  color: ${colorHelper.getColor('error')};
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-xs);
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
      <div style={{paddingTop: 'var(--spacing-s)'}}>
        <InputDiv>
          <Round error={!!errors}>
            <Input
              name={this.props.field.name}
              value={this.props.value}
              disabled={this.props.field.disabled}
              onChange={this.props.field.onChange}
              checked={checked}
              type='radio'
            />
            <Span error={errors} />
          </Round>
          <Label dangerouslySetInnerHTML={{ __html: label }} error={!!errors}></Label>
        </InputDiv>
        {
          touched && errors && <ErrorMessageStyled>{errors}</ErrorMessageStyled>
        }
      </div>

    );
  }
}
