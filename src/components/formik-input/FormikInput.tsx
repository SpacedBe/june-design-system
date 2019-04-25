/**
 * @class FormikInput
 */

import * as React from 'react';
import styled from 'styled-components';
import {getIn} from 'formik';
import Color from "../../helpers/color";

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
  disabled?: boolean,
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

const colorHelper = new Color();

const InputStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  text-align: left;
`;

const InputboxIconStyled = styled.div<any>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  color: ${props => props.error ? `${colorHelper.getColor('error')}` : `${colorHelper.getColor('gray-light')}`};
  background-color: ${colorHelper.getColor('white')};
  padding: var(--spacing-s);
  margin-right: var(--spacing-s);
  border: ${props => props.error ? `2px solid ${colorHelper.getColor('error')}` : `2px solid ${colorHelper.getColor('gray-light')}`};
  border-radius: 3px;
  opacity: ${props => props.disabled ? '0.5' : '1'};
  outline: none;
  display: flex;
  justify-content: space-between;
  
  &::placeholder {
     color: ${props => props.error ? `${colorHelper.getColor('error')}` : `${colorHelper.getColor('gray-light')}`};
  }
`;

const Input = styled.input<{ error?: boolean; disabled?: boolean }>`
  font-size: var(--font-size-m);
  color: var(--color-dark);
  border: none;
  outline: none;
  background-color: var(--color-white);
  opacity: ${props => props.disabled ? '0.5' : '1'};
  width: 100%;
`;

const InputWithIconLeft = styled(Input)`
  padding-left: var(--icon-size-xs);
`;

const IconSmall = styled.span<{ disabled?: boolean }>`
  font-size: var(--icon-size-s);
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  display: inline-flex;
`;

const IconBig = styled.span<any>`
  font-size: var(--icon-size-m);
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  display: inline-flex;
`;

const ButtonSmall = styled.button<{ disabled?: boolean }>`
  font-size: var(--font-size-m);
  opacity: ${props => (props.disabled ? "0.5" : "1")};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const LabelStyle = styled.span<{ disabled?: boolean; error?: boolean }>`
  font-family: var(--font-secondary);
  padding-bottom: var(--spacing-xs);
  color: ${props => {
  if (props.disabled) {
    return colorHelper.getColor('disabled');
  }

  if (props.error) {
    return colorHelper.getColor('error');
  }

  return colorHelper.getColor('dark');
}};
`;

const HintStyled = styled.span`
  font-size: var(--font-size-xs);
  color: var(--color-gray-light);
  margin-bottom: var(--spacing-xs);
`;

const ErrorMessageStyled = styled.span`
  font-size: var(--font-size-s);
  color: ${colorHelper.getColor('error')};
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-xs);
`;

export class FormikInput extends React.Component<Props> {
  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = (this.props.serverErrors && this.props.serverErrors[name]) || error;

    let inputContent;

    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.buttonRight || this.props.iconFront || this.props.iconEnd || this.props.required;
    const hasButton = this.props.buttonOutsideRight || this.props.tooltip;

    if (!hasIcon) {
      inputContent = (
        <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}
                      focussed={this.props.focussed}>
          <Input {...this.props.field}
                 placeholder={this.props.placeholderText}
                 disabled={this.props.disabled}
                 type={this.props.type}>
          </Input>
        </InputboxIconStyled>
      );
    }

    if (hasIcon && this.props.iconLeft) {
      inputContent = (
        <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}
                      focussed={this.props.focussed}>
          <IconSmall>{this.props.iconLeft}</IconSmall>
          <InputWithIconLeft {...this.props.field} placeholder={this.props.placeholderText}
                             type={this.props.type}></InputWithIconLeft>
        </InputboxIconStyled>
      );
    }

    if (hasIcon && this.props.iconRight) {
      inputContent = (
        <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}
                       focussed={this.props.focussed}>
          <Input {...this.props.field}
                 placeholder={this.props.placeholderText}
                 disabled={this.props.disabled}
                 type={this.props.type}>
          </Input>
          <IconSmall>{this.props.iconRight}</IconSmall>
        </InputboxIconStyled>
      );
    }

    if (hasIcon && this.props.buttonRight) {
      inputContent = (
        <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}
                      focussed={this.props.focussed}>
          <Input {...this.props.field} placeholder={this.props.placeholderText}
                 disabled={this.props.disabled}
                 type={this.props.type}></Input>
          <ButtonSmall disabled={this.props.disabled}>{this.props.buttonRight}</ButtonSmall>
        </InputboxIconStyled>
      );
    }

    if (hasButton && this.props.buttonOutsideRight) {
      inputContent = (
        <Flex>
          <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}
                         focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText}
                   disabled={this.props.disabled}
                   type={this.props.type}></Input>
          </InputboxIconStyled>
          <IconSmall disabled={this.props.disabled}>{this.props.buttonOutsideRight}</IconSmall>
        </Flex>
      );
    }

    if (hasIcon && this.props.iconFront) {
      inputContent = (
        <Flex>
          <IconBig>{this.props.iconFront}</IconBig>
          <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}
                        focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText}
                   disabled={this.props.disabled}
                   type={this.props.type}></Input>
          </InputboxIconStyled>
        </Flex>
      );
    }

    if (hasIcon && this.props.iconEnd) {
      inputContent = (
        <Flex>
          <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}
                        focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText}
                   disabled={this.props.disabled}
                   type={this.props.type}></Input>
          </InputboxIconStyled>
          <IconBig>{this.props.iconEnd}</IconBig>
        </Flex>
      );
    }

    if (hasIcon && this.props.required) {
      inputContent = (
        <div>
          <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}
                         focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText}
                   disabled={this.props.disabled}
                   type={this.props.type}></Input>
          </InputboxIconStyled>
        </div>
      );
    }

    if (hasButton && this.props.tooltip) {
      inputContent = (
        <div>
          <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}
                         focussed={this.props.focussed}>
            <Input {...this.props.field} placeholder={this.props.placeholderText}
                   disabled={this.props.disabled}
                   type={this.props.type}></Input>
          </InputboxIconStyled>
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
