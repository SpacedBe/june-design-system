/**
 * @class FormikInput
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

  type: 'text' | 'number' | 'password';
  validationMessage: string;
  label: string;
  placeholderText: string;
  error: boolean,
  focussed: boolean,
  disabled: boolean,
  iconLeft?: any,
  iconRight?: any,
  buttonRight?: any,
  iconFront?: any,
  iconEnd?: any,
  buttonOutsideRight?: any,
  toolTip?: any,
  required?: any,
  current?: boolean,
  classNames?: string[],
};

const styleVariables = loadStyleVariables();

const InputBoxRight = styled.div<{ error?: boolean; disabled?: boolean, focussed?: boolean }>`
  border: ${props => props.error ? `2px solid ${styleVariables.red}` : `2px solid ${styleVariables.grayLight}`};
  color: ${props => props.error ? `${styleVariables.red}` : `${styleVariables.grayLight}`};
  padding: 10px 10px 10px 10px;
  border-radius: 2.5px;
  background-color: ${styleVariables.white};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  outline: none;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;

const InputBoxLeft = styled.div<{error?: boolean; disabled?: boolean, focussed?: boolean}>`
  border: ${props => props.error ? `2px solid ${styleVariables.red}` : `2px solid ${styleVariables.grayLight}`};
  color: ${props => props.error ? `${styleVariables.red}` : `${styleVariables.grayLight}`};
  padding: 10px 10px 10px 10px;
  border-radius: 2.5px;
  background-color: ${styleVariables.white};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  outline: none;
  display: flex;
  height: 40px;
  width: 100%;
`
const InputWithIconLeft = styled.input`
  border: none;
  margin-left: 10px;
  outline: none;
`

const Input = styled.input<{ error?: boolean; disabled?: boolean }>`
  border: none;
  outline: none;
  background-color: ${styleVariables.white};
  opacity: ${props => props.disabled ? '0.5' : '1'};
`

const IconSmall = styled.span`
  font-size: 1.5em;
`
const IconBig = styled.span`
  font-size: 2em;
`

const ButtonSmall = styled.button<{disabled?:boolean}>`
font-size: 1em;
opacity: ${props => props.disabled ? '0.5' : '1'};
`
const Flex = styled.div`
 display: flex;
 align-items: center;
 width: 100%;
 justify-content: space-between;
`

const Label = styled.label`
 padding-bottom: 5px;
`

const ToolTip = styled.button`
 font-size: 1.2em;
`

export class FormikInput extends React.Component<Props> {
  render() {
    const FieldName = this.props.field.name;
    const errors = (this.props.serverErrors && this.props.serverErrors[FieldName]) || this.props.form.errors[FieldName];
    const touched = this.props.form.touched[FieldName];

    let Tag = 'span';
    let buttonContent;

    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.buttonRight || this.props.iconFront || this.props.iconEnd || this.props.required;
    const hasButton = this.props.buttonOutsideRight || this.props.toolTip;

    if (!hasIcon) {
      buttonContent = (
        <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
          <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type} ></Input>
        </InputBoxLeft>

      )
    }

    if (hasIcon && this.props.iconLeft){
      buttonContent = (
        <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
          <IconSmall>{this.props.iconLeft}</IconSmall>
          <InputWithIconLeft {...this.props.field} placeholder={this.props.placeholderText} type={this.props.type}></InputWithIconLeft>
        </InputBoxLeft>
      )
    }

    if(hasIcon && this.props.iconRight){
      buttonContent = (
        <InputBoxRight error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
          <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          <IconSmall >{this.props.iconRight}</IconSmall>
        </InputBoxRight>
      )
    }

    if (hasIcon && this.props.buttonRight) {
      buttonContent = (
        <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
          <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          <ButtonSmall disabled={this.props.disabled}>{this.props.buttonRight}</ButtonSmall>
        </InputBoxLeft>
      )
    }


    if (hasButton && this.props.buttonOutsideRight) {
      buttonContent = (
        <Flex>
          <InputBoxRight error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          </InputBoxRight>
          <ButtonSmall disabled={this.props.disabled} >{this.props.buttonOutsideRight}</ButtonSmall>
        </Flex>
      )
    }


    if(hasIcon && this.props.iconFront){
      buttonContent = (
        <Flex>
          <IconBig>{this.props.iconFront}</IconBig>
          <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          </InputBoxLeft>
        </Flex>
      )
    }

    if(hasIcon && this.props.iconEnd){
      buttonContent = (
        <Flex>
          <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          </InputBoxLeft>
          <IconBig>{this.props.iconEnd}</IconBig>
        </Flex>
      )
    }

    if (hasIcon && this.props.required) {
      buttonContent = (
        <div>
          <Flex>
            <Label htmlFor={FieldName}>
              {this.props.label}
            </Label>
          </Flex>

          <InputBoxRight error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          </InputBoxRight>
        </div>
      )
    }

    if (hasButton && this.props.toolTip) {
      buttonContent = (
        <div>
          <Flex>
            <Label htmlFor={FieldName}>
              {this.props.label}
              <ToolTip>{this.props.toolTip}</ToolTip>
            </Label>
          </Flex>
          <InputBoxRight error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          </InputBoxRight>
        </div>
      )
    }

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
