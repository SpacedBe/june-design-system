/**
 * @class FormikInput
 */

import * as React from 'react';
import styled from 'styled-components';
import {loadStyleVariables} from "../../scripts/loadStyleVariables";

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
  tooltip?: any,
  required?: any,
  current?: boolean,
  classNames?: string[],
};

const styleVariables = loadStyleVariables();

const InputStyle = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  text-align: left;
`;

const InputBoxRight = styled.div<{ error?: boolean; disabled?: boolean, focussed?: boolean }>`
  width: 100%;
  border: ${props => props.error ? `2px solid ${styleVariables.colorRed}` : `2px solid ${styleVariables.colorGrayLight}`};
  color: ${props => props.error ? `${styleVariables.colorRed}` : `${styleVariables.colorGrayLight}`};
  padding: 10px 10px 10px 10px;
  margin-right: 20px;
  border-radius: 2.5px;
  background-color: ${styleVariables.colorWhite};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  outline: none;
  display: flex;
  justify-content: space-between;
  height: 45px;
  &::placeholder {
     color: ${props => props.error ? `${styleVariables.colorRed}` : `${styleVariables.colorGrayLight}`};
  }
`;

const InputBoxLeft = styled.div<{
  error?: boolean;
  disabled?: boolean;
  focussed?: boolean;
}>`
  width: 100%;
  border: ${props =>
  props.error
    ? `2px solid ${styleVariables.colorRed}`
    : `2px solid ${styleVariables.colorGrayLight}`};
  color: ${props =>
  props.error
    ? `${styleVariables.colorRed}`
    : `${styleVariables.colorGrayLight}`};
  padding: 10px 10px 10px 10px;
  border-radius: 2.5px;
  background-color: ${styleVariables.colorWhite};
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  outline: none;
  display: flex;
  height: 45px;
`;

const InputWithIconLeft = styled.input`
  border: none;
  margin-left: 10px;
  background-color: ${styleVariables.colorWhite};
  outline: none;
`;

const Input = styled.input<{ error?: boolean; disabled?: boolean }>`
  border: none;
  outline: none;
  background-color: ${styleVariables.colorWhite};
  opacity: ${props => props.disabled ? '0.5' : '1'};
  width: 100%;
`;

const IconSmall = styled.span<{ disabled?: boolean }>`
  font-size: ${styleVariables.fontSizeXxl};
  opacity: ${props => (props.disabled ? "0.5" : "1")};
`;

const IconBig = styled.span`
  font-size: ${styleVariables.fontSizeXxl};
`;

const ButtonSmall = styled.button<{ disabled?: boolean }>`
  font-size: ${styleVariables.fontSizeM};
  opacity: ${props => (props.disabled ? "0.5" : "1")};
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const LabelStyle = styled.span<{ disabled?: boolean; error?: boolean }>`
  font-size: ${styleVariables.fontSizeM};
  font-family: ${styleVariables.fontSecondary};
  padding-bottom: 5px;
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  color: ${props =>
  props.error ? `${styleVariables.colorRed}` : `${styleVariables.black}`};
`;

export class FormikInput extends React.Component<Props> {
  render() {
    console.log(this.props);

    const FieldName = this.props.field.name;
    const label = this.props.label;
    const errors = (this.props.serverErrors && this.props.serverErrors[FieldName]) || this.props.form.errors[FieldName];
    const touched = this.props.form.touched[FieldName];

    let buttonContent;

    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.buttonRight || this.props.iconFront || this.props.iconEnd || this.props.required;
    const hasButton = this.props.buttonOutsideRight || this.props.tooltip;

    if (!hasIcon) {
      buttonContent = (
        <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
          <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled}
                 type={this.props.type}></Input>
        </InputBoxLeft>
      );
    }

    if (hasIcon && this.props.iconLeft) {
      buttonContent = (
        <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
          <IconSmall>{this.props.iconLeft}</IconSmall>
          <InputWithIconLeft {...this.props.field} placeholder={this.props.placeholderText}
                             type={this.props.type}></InputWithIconLeft>
        </InputBoxLeft>
      );
    }

    if (hasIcon && this.props.iconRight) {
      buttonContent = (
        <InputBoxRight error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
          <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled}
                 type={this.props.type}></Input>
          <IconSmall>{this.props.iconRight}</IconSmall>
        </InputBoxRight>
      );
    }

    if (hasIcon && this.props.buttonRight) {
      buttonContent = (
        <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
          <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled}
                 type={this.props.type}></Input>
          <ButtonSmall disabled={this.props.disabled}>{this.props.buttonRight}</ButtonSmall>
        </InputBoxLeft>
      );
    }

    if (hasButton && this.props.buttonOutsideRight) {
      buttonContent = (
        <Flex>
          <InputBoxRight error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled}
                   type={this.props.type}></Input>
          </InputBoxRight>
          <IconSmall disabled={this.props.disabled}>{this.props.buttonOutsideRight}</IconSmall>
        </Flex>
      );
    }

    if (hasIcon && this.props.iconFront) {
      buttonContent = (
        <Flex>
          <IconBig>{this.props.iconFront}</IconBig>
          <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled}
                   type={this.props.type}></Input>
          </InputBoxLeft>
        </Flex>
      );
    }

    if (hasIcon && this.props.iconEnd) {
      buttonContent = (
        <Flex>
          <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled}
                   type={this.props.type}></Input>
          </InputBoxLeft>
          <IconBig>{this.props.iconEnd}</IconBig>
        </Flex>
      );
    }

    if (hasIcon && this.props.required) {
      buttonContent = (
        <div>
          <InputBoxRight error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled}
                   type={this.props.type}></Input>
          </InputBoxRight>
        </div>
      );
    }

    if (hasButton && this.props.tooltip) {
      buttonContent = (
        <div>
          <Flex>
            <IconSmall disabled={this.props.disabled}>{this.props.tooltip}</IconSmall>
          </Flex>
          <InputBoxRight error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled}
                   type={this.props.type}></Input>
          </InputBoxRight>
        </div>
      );
    }

    return (
      <InputStyle>
        <LabelStyle
          error={this.props.error}
          disabled={this.props.disabled}
        >
          {label}
        </LabelStyle>
        {buttonContent}
        <span>{touched && errors && <div>{errors}</div>}</span>
      </InputStyle>
    );
  }
}
