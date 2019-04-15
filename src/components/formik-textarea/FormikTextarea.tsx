/**
 * @class FormikTextarea
 */

import * as React from 'react';
import styled from 'styled-components';
import {loadStyleVariables} from "../../scripts/loadStyleVariables";
import {getIn} from 'formik';

const sizes = {
  small: "50px",
  medium: "100px",
  large: "150px",
  xlarge: "200px"
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

const styleVariables = loadStyleVariables();

const InputBoxRight = styled.div<{ error?: boolean; disabled?: boolean, focussed?: boolean, size?: string; }>`
  border: ${props => props.error ? `2px solid ${styleVariables.colorRed}` : `2px solid ${styleVariables.colorGrayLight}`};
  color: ${props => props.error ? `${styleVariables.colorRed}` : `${styleVariables.colorGrayLight}`};
  padding: 10px;
  border-radius: 2.5px;
  background: ${styleVariables.colorWhite};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  outline: none;
  display: flex;
  justify-content: space-between;
  height: ${props => sizes[props.size || "medium"]};

  &::placeholder {
     color: ${props => props.error ? `${styleVariables.colorRed}` : `${styleVariables.colorGrayLight}`};
  }
`;

const Textarea = styled.textarea<{ error?: boolean; disabled?: boolean }>`
  border: none;
  outline: none;
  background: ${styleVariables.colorWhite};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  width: 100%;
  resize: none;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Label = styled.label<{ disabled?: boolean; error?: boolean }>`
  padding-bottom: 5px;
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  color: ${props =>
  props.error ? `${styleVariables.colorRed}` : `${styleVariables.black}`};
  font-family: ${styleVariables.fontSecondary};
  font-size: ${styleVariables.fontSizeM};
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
          <Label error={!!errors} disabled={this.props.disabled} htmlFor={name}>
            {label}
          </Label>
        </Flex>
        <InputBoxRight size={this.props.size}
                       error={!!errors}
                       disabled={this.props.disabled}>
          <Textarea {...this.props.field}
                    placeholder={this.props.placeholderText}
                    disabled={this.props.disabled}>
          </Textarea>
        </InputBoxRight>
      </div>
    );
    return (
      <span>
        {buttonContent}

        <span>
          {
            touched && errors && <div>{errors}</div>
          }
        </span>
      </span>
    );
  }
}
