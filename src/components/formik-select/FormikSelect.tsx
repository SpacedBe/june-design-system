/**
 * @class FormikSelect
 */

import React from 'react';
import styled from 'styled-components';
import {getIn} from 'formik';
import Color from "../../helpers/color";

interface Option {
  label: string,
  value: string,
}

type Props = {
  field: {
    name: string;
    onChange?: (arg?: any) => void;
  }

  form: {
    ['errors']: string;
    ['touched']: boolean;
  };

  ['serverErrors']?: string;

  options: Option[],
  label?: string,
  placeholder?: string,
  error?: boolean,
  disabled?: boolean,
};

const colorHelper = new Color();

const WrapperStyled = styled.div<{ error?: boolean; disabled?: boolean; }>`
  text-align: left;
  width: 100%;
`;

const SelectStyled = styled.select<{
  error?: boolean;
  disabled?: boolean;
}>`
  border: ${props =>
  props.error
    ? `2px solid var(--color-error)`
    : `2px solid var(--color-gray-light)`};
  border-radius: 3px;
  background-color: var(--color-white);
  outline: none;
  display: flex;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  justify-content: space-between;
  width: 100%;
  height: 48px;
`;

const LabelStyled = styled.label<{
  error?: boolean;
  disabled?: boolean;
}>`
  display: block;
  margin-bottom: var(--spacing-xs);
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  color: ${props =>
  props.error
    ? `var(--color-error)`
    : `var(--color-dark)`};
  font-family: var(--font-secondary);
  font-size: var(--font-size-m);
`;

const OptionStyled = styled.option`
  color: var(--color-gray);
`;

const ErrorMessageStyled = styled.span`
  font-size: var(--font-size-s);
  color: ${colorHelper.getColor('error')};
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-xs);
`;

export class FormikSelect extends React.Component<Props> {
  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = (this.props.serverErrors && this.props.serverErrors[name]) || error;

    return (
      <WrapperStyled disabled={this.props.disabled} error={!!errors}>
        <LabelStyled
          disabled={this.props.disabled}
          error={this.props.error}
          htmlFor={name}>
          {label}
        </LabelStyled>

        <SelectStyled {...this.props.field}
                      disabled={this.props.disabled}
                      error={this.props.error}>

          {this.props.placeholder &&
          (<OptionStyled value='placeholderValue' selected disabled
                         hidden>{this.props.placeholder}</OptionStyled>)
          }
          {this.props.options.map(item => (
            <OptionStyled key={item.value} value={item.value}>
              {item.label}
            </OptionStyled>
          ))}
        </SelectStyled>
        {touched && errors && <ErrorMessageStyled>{errors}</ErrorMessageStyled>}
      </WrapperStyled>
    );
  }
}
