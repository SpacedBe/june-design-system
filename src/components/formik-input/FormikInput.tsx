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
  hint?: string,
  required?: any,
  current?: boolean,
  classNames?: string[],
};

const styleVariables = loadStyleVariables();

const InputStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  text-align: left;
`;

const InputBoxRight = styled.div<{ error?: boolean; disabled?: boolean, focussed?: boolean }>`
  width: 100%;
  box-sizing: border-box;
  border: ${props => props.error ? `2px solid ${styleVariables.colorError}` : `2px solid ${styleVariables.colorGrayLight}`};
  color: ${props => props.error ? `${styleVariables.colorError}` : `${styleVariables.colorGrayLight}`};
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
     color: ${props => props.error ? `${styleVariables.colorError}` : `${styleVariables.colorGrayLight}`};
  }
`;

const InputBoxLeft = styled.div<{ error?: boolean; disabled?: boolean; focussed?: boolean; }>`
  width: 100%;
  border: ${props => props.error ? `2px solid ${styleVariables.colorError}` : `2px solid ${styleVariables.colorGrayLight}`};
  color: ${props => props.error ? `${styleVariables.colorError}` : `${styleVariables.colorGrayLight}`};
  padding: 10px 10px 10px 10px;
  border-radius: 2.5px;
  background-color: ${styleVariables.colorWhite};
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  outline: none;
  display: flex;
  height: 45px;
  box-sizing: border-box;
  margin-bottom: var(--spacing-xs);
`;

const InputWithIconLeft = styled.input`
  border: none;
  margin-left: 10px;
  background-color: ${styleVariables.colorWhite};
  outline: none;
  margin-bottom: var(--spacing-xs);
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
  color: ${props => props.error ? `${styleVariables.colorError}` : `${styleVariables.black}`};
`;

const HintStyled = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-gray-light);
  margin-bottom: var(--spacing-xs);
`;

const ErrorMessageStyled = styled.span`
  font-size: ${styleVariables.fontSizeS};
  color: ${styleVariables.colorError};
  font-weight: ${styleVariables.fontWeightBold};
  margin-bottom: var(--spacing-xs);
`;

export class FormikInput extends React.Component<Props> {
  render() {
    const FieldName = this.props.field.name;
    const label = this.props.label;
    const errors = (this.props.serverErrors && this.props.serverErrors[FieldName]) || this.props.form.errors[FieldName];
    const touched = this.props.form.touched[FieldName];

    let inputContent;

    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.buttonRight || this.props.iconFront || this.props.iconEnd || this.props.required;
    const hasButton = this.props.buttonOutsideRight || this.props.tooltip;

    if (!hasIcon) {
      inputContent = (
        <InputBoxLeft error={touched && errors} disabled={this.props.disabled} focussed={this.props.focussed}>
          <Input {...this.props.field}
                 placeholder={this.props.placeholderText}
                 disabled={this.props.disabled}
                 type={this.props.type}>
          </Input>
        </InputBoxLeft>
      );
    }

    if (hasIcon && this.props.iconLeft) {
      inputContent = (
        <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
          <IconSmall>{this.props.iconLeft}</IconSmall>
          <InputWithIconLeft {...this.props.field} placeholder={this.props.placeholderText}
                             type={this.props.type}></InputWithIconLeft>
        </InputBoxLeft>
      );
    }

    if (hasIcon && this.props.iconRight) {
      inputContent = (
        <InputBoxRight error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
          <Input {...this.props.field}
                 placeholder={this.props.placeholderText}
                 disabled={this.props.disabled}
                 type={this.props.type}>
          </Input>
          <IconSmall>{this.props.iconRight}</IconSmall>
        </InputBoxRight>
      );
    }

    if (hasIcon && this.props.buttonRight) {
      inputContent = (
        <InputBoxLeft error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
          <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled}
                 type={this.props.type}></Input>
          <ButtonSmall disabled={this.props.disabled}>{this.props.buttonRight}</ButtonSmall>
        </InputBoxLeft>
      );
    }

    if (hasButton && this.props.buttonOutsideRight) {
      inputContent = (
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
      inputContent = (
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
      inputContent = (
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
      inputContent = (
        <div>
          <InputBoxRight error={this.props.error} disabled={this.props.disabled} focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled}
                   type={this.props.type}></Input>
          </InputBoxRight>
        </div>
      );
    }

    if (hasButton && this.props.tooltip) {
      inputContent = (
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

    const hintContent = (
      <HintStyled>{this.props.hint}</HintStyled>
    );

    return (
      <InputStyled>
        <LabelStyle error={touched && errors}
                    disabled={this.props.disabled}>
          {label}
        </LabelStyle>
        {inputContent}
        {this.props.hint && hintContent}
        {touched && errors && <ErrorMessageStyled>{errors}</ErrorMessageStyled>}
      </InputStyled>
    );
  }
}
