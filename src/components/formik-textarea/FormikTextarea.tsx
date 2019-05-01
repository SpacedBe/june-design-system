/**
 * @class FormikTextarea
 */

import React from 'react';
import styled from 'styled-components';
import {getIn} from 'formik';
import Color from "../../helpers/color";

const sizes = {
  small: '50px',
  medium: '100px',
  large: '150px',
  xlarge: '200px'
};

type Props = {
  field: {
    name: string;
  };
  form: {
    ['errors']: string;
    ['touched']: boolean;
  };

  ['serverErrors']: string;

  validationMessage: string;
  label: string;
  placeholderText: string;
  error: boolean,
  focussed: boolean,
  disabled: boolean,
  required?: any,
  rows?: number,
  cols?: number,
  size?: 'small' | 'medium' | 'large' | 'xlarge',
  classNames?: string[],
};

const colorHelper = new Color();

const InputBoxRight = styled.div<{ error?: boolean; disabled?: boolean; focussed?: boolean; size?: string;}>`
  border-radius: 2.5px;
  background: var(--color-white);
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  outline: none;
  display: flex;
  justify-content: space-between;
  height: ${props => sizes[props.size || 'medium']};
`;

const Textarea = styled.textarea<{ disabled?: boolean, error?: boolean }>`
  border: none;
  outline: none;
  background: var(--color-white);
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  width: 100%;
  padding: 10px;
  resize: none;
  font-size: var(--font-size-m);
  border: ${props =>
    props.error
      ? `2px solid var(--color-error)`
      : `2px solid var(--color-gray-light)`};
`;

const Flex = styled.div<{ disabled?: boolean; error?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Label = styled.label<{ disabled?: boolean; error?: boolean }>`
  padding-bottom: 5px;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  color: ${props => (props.error ? `var(--color-error)` : `var(--color-dark)`)};
  font-family: var(--font-secondary);
  font-size: var(--font-size-m);
`;

const ErrorMessageStyled = styled.span`
  font-size: var(--font-size-s);
  color: ${colorHelper.getColor('error')};
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-xs);
`;

export class FormikTextarea extends React.Component<Props> {
  static defaultProps = {
    size: 'medium',
  };

  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = (this.props.serverErrors && this.props.serverErrors[name]) || error;

    let buttonContent;
    buttonContent = (
      <div>
        <Flex>
          <Label error={this.props.error} disabled={this.props.disabled} htmlFor={name}>
            {label}
          </Label>
        </Flex>
        <InputBoxRight size={this.props.size}>
          <Textarea {...this.props.field}
                    placeholder={this.props.placeholderText}
                    disabled={this.props.disabled} error={this.props.error}>
          </Textarea>
        </InputBoxRight>
      </div>
    );
    return (
      <span>
        {buttonContent}

        <span>
          {
            touched && errors && <ErrorMessageStyled>{errors}</ErrorMessageStyled>
          }
        </span>
      </span>
    );
  }
}
