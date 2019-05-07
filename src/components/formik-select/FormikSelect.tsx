/**
 * @class FormikSelect
 */

import React from 'react';
import styled from 'styled-components';
import {getIn} from 'formik';
import {IconTriangleDown} from "../../icons";

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

const WrapperStyled = styled.div<{ error?: boolean; disabled?: boolean; }>`
  text-align: left;
  width: 100%;
`;

const SelectStyled = styled.select<{ error?: boolean; disabled?: boolean; }>`
  font-size: var(--font-size-m);
  -webkit-appearance: none;
  -moz-appearance: none;
  
  &::-ms-expand {
     display: none;
  }
  color: ${props => {
    if (props.disabled) {
      return 'var(--color-disabled)';
    }
  
    if (props.error) {
      return 'var(--color-error)';
    }

  return 'var(--color-dark)';
  }};
  border: 2px solid ${props => {
    if (props.disabled) {
      return 'var(--color-gray-lighter)';
    }
  
    if (props.error) {
      return 'var(--color-error)';
    }

  return 'var(--color-gray-light)';
  }};
  min-height: 50px;
  border-radius: 3px;
  background-color: var(--color-white);
  outline: none;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1.1em;
  cursor: pointer;
`;

const IconStyled = styled(IconTriangleDown)<{disabled?: boolean, error?: boolean}>`
  position: absolute;
  top: 23%;
  right: 10px;
  font-size: var(--icon-size-m);
  fill: ${props => {
    if (props.disabled) {
      return 'var(--color-disabled)';
    }
  
    if (props.error) {
      return 'var(--color-error)';
    }

  return 'var(--color-dark)';
  }};
  pointer-events: none;
`;

const LabelStyled = styled.label<{
  error?: boolean;
  disabled?: boolean;
}>`
  display: block;
  margin-bottom: var(--spacing-sm);
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
  color: var(--color-error);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-xs);
`;

export class FormikSelect extends React.Component<Props> {
  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const fieldError = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const formError = touched ? (this.props.serverErrors && this.props.serverErrors[name]) || fieldError : null;

    return (
      <WrapperStyled disabled={this.props.disabled} error={!!formError}>
        <LabelStyled
          disabled={this.props.disabled}
          error={formError}
          htmlFor={name}>
          {label}
        </LabelStyled>

        <div style={{position: 'relative'}}>
          <SelectStyled {...this.props.field}
                        disabled={this.props.disabled}
                        error={formError}>

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
          <IconStyled disabled={this.props.disabled} error={formError}/>
        </div>

        {formError && <ErrorMessageStyled>{formError}</ErrorMessageStyled>}
      </WrapperStyled>
    );
  }
}
