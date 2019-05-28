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
  border:  ${props => {
     if (props.disabled) {
       return `2px solid var(--color-gray-lighter)`;
     }

     if (props.error) {
       return `2px solid var(--color-error)`;
     }

     return `2px solid var(--color-gray)`;
   }};
  background: var(--color-white);
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  outline: none;
  display: flex;
  justify-content: space-between;
  height: ${props => sizes[props.size || 'medium']};
`;

const Textarea = styled.textarea`
  border: none;
  outline: none;
  background: var(--color-white);
  width: 100%;
  padding: 10px;
  resize: none;
  font-size: var(--font-size-m);

`;

const Flex = styled.div<{ disabled?: boolean; error?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const LabelStyled = styled.span<{ disabled?: boolean; error?: boolean }>`
  padding-bottom: 5px;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  color: ${props => {
    if (props.disabled) {
      return colorHelper.getColor('disabled');
    }

    if (props.error) {
      return colorHelper.getColor('error');
    }

    return colorHelper.getColor('dark');
  }};
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
    const errors = touched ? (this.props.serverErrors && this.props.serverErrors[name]) || error : null;

    let buttonContent;
    buttonContent = (
      <div>
        <Flex>
          <LabelStyled error={errors} disabled={this.props.disabled} htmlFor={name}>
            {label}
          </LabelStyled>
        </Flex>
        <InputBoxRight error={errors} disabled={this.props.disabled} size={this.props.size}>
          <Textarea {...this.props.field}
                    placeholder={this.props.placeholderText}>
          </Textarea>
        </InputBoxRight>
      </div>
    );
    return (
      <span>
        {buttonContent}

        <span>
          {errors && <ErrorMessageStyled>{errors}</ErrorMessageStyled>}
        </span>
      </span>
    );
  }
}
