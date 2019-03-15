/**
 * @class FormikTextarea
 */

import * as React from 'react';
import styled from 'styled-components';
import { loadStyleVariables } from "../../scripts/loadStyleVariables";

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
  classNames?: string[],
};

const styleVariables = loadStyleVariables();

const InputBoxRight = styled.div<{ error?: boolean; disabled?: boolean, focussed?: boolean }>`
  border: ${props => props.error ? `2px solid ${styleVariables.red}` : `2px solid ${styleVariables.grayLight}`};
  color: ${props => props.error ? `${styleVariables.red}` : `${styleVariables.grayLight}`};
  padding: 10px 10px 10px 10px;
  border-radius: 2.5px;
  background: ${styleVariables.colorWhite};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  outline: none;
  display: flex;
  justify-content: space-between;
  height: 200px;
  margin-bottom: 20px;
  &::placeholder {
     color: ${props => props.error ? `${styleVariables.red}` : `${styleVariables.grayLight}`};
  }
`;

const Textarea = styled.textarea<{ error?: boolean; disabled?: boolean }>`
  border: none;
  outline: none;
  background: ${styleVariables.colorWhite};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  width: 100%;

`

const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`

const Label = styled.label<{ disabled?: boolean, error?: boolean }>`
  padding-bottom: 5px;
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  color: ${props =>
    props.error ? `${styleVariables.red}` : `${styleVariables.black}`};
`;
export class FormikTextarea extends React.Component<Props> {
  render() {
    const FieldName = this.props.field.name;
    const errors = (this.props.serverErrors && this.props.serverErrors[FieldName]) || this.props.form.errors[FieldName];
    const touched = this.props.form.touched[FieldName];

    let Tag = 'span';
    let buttonContent;

      buttonContent = (
        <div>
          <Flex>
            <Label error={this.props.error} disabled={this.props.disabled} htmlFor={FieldName}>
              {this.props.label}
            </Label>
          </Flex>
          <InputBoxRight error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Textarea {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled}></Textarea>
          </InputBoxRight>
        </div>
      )


    return (
      <Tag>
        {buttonContent}
        <Tag>
          {
            touched && errors && <div>{errors}</div>
          }
        </Tag>
      </Tag>
    )
  }
}
