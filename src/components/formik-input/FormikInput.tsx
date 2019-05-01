/**
 * @class FormikInput
 */

import React from 'react';
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
  style?: any,
};

const colorHelper = new Color();

const WrapperStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  text-align: left;
`;

const InputboxIconStyled = styled.div<{ error?: boolean, disabled?: boolean }>`
  position: relative;
  width: 100%;
  background-color: ${colorHelper.getColor('white')};
  padding: 1.1em;
  border: ${props => props.error ? `2px solid ${colorHelper.getColor('error')}` : `2px solid ${colorHelper.getColor('gray-light')}`};
  border-radius: 3px;
  opacity: ${props => props.disabled ? '0.5' : '1'};
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::placeholder {
     color: ${props => props.error ? `${colorHelper.getColor('error')}` : `${colorHelper.getColor('gray-light')}`};
  }
`;

const InputStyled = styled.input<{ error?: boolean; disabled?: boolean }>`
  font-size: var(--font-size-m);
  color: ${props => props.error ? `${colorHelper.getColor('error')}` : `${colorHelper.getColor('dark')}`};
  border: none;
  outline: none;
  background-color: var(--color-white);
  opacity: ${props => props.disabled ? '0.5' : '1'};
  width: 100%;
`;

const InputWithIconLeftStyled = styled(InputStyled)`
  padding-left: var(--icon-size-m);
`;

const IconSmallStyled = styled.span<{ disabled?: boolean, hasIconRight?: boolean }>`
  display: flex;
  position: absolute;
  ${props => props.hasIconRight ? 'right: var(--spacing-xs)' : 'left: var(--spacing-xs)'};
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  font-size: var(--icon-size-m);
`;

const IconBigStyled = styled(IconSmallStyled)`
  font-size: var(--icon-size-l);
`;

const IconOutsideLeftStyled = styled(IconBigStyled)`
  position: relative;
  left: auto;
`;

const ButtonOutsideRightStyled = styled.span<{ disabled?: boolean }>`
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  margin-left: var(--spacing-s);
`;

const ButtonWrapperStyled = styled.button<{ disabled?: boolean }>`
  opacity: ${props => (props.disabled ? "0.5" : "1")};
`;

const FlexStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const LabelStyled = styled.span<{ disabled?: boolean; error?: boolean }>`
  font-family: var(--font-secondary);
  padding-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
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
  margin-top: var(--spacing-xs);
`;

const ErrorMessageStyled = styled.span`
  font-size: var(--font-size-s);
  color: var(--color-error);
  font-weight: var(--font-weight-bold);
  margin-top: var(--spacing-xs);
`;

export class FormikInput extends React.Component<Props> {
  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = (this.props.serverErrors && this.props.serverErrors[name]) || error;

    let inputContent;

    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.buttonRight || this.props.iconFront || this.props.iconEnd;
    const hasButton = this.props.buttonOutsideRight;

    if (!hasIcon) {
      inputContent = (
        <InputboxIconStyled error={this.props.error}
                            disabled={this.props.disabled}>
          <InputStyled {...this.props.field}
                       error={this.props.error}
                       placeholder={this.props.placeholderText}
                       disabled={this.props.disabled}
                       type={this.props.type}>
          </InputStyled>
        </InputboxIconStyled>
      );
    }

    if (hasIcon && this.props.iconLeft) {
      inputContent = (
        <InputboxIconStyled error={this.props.error}
                            disabled={this.props.disabled}>
          <IconSmallStyled hasIconRight={this.props.iconRight}>{this.props.iconLeft}</IconSmallStyled>
          <InputWithIconLeftStyled {...this.props.field}
                                   error={this.props.error}
                                   placeholder={this.props.placeholderText}
                                   type={this.props.type}></InputWithIconLeftStyled>
        </InputboxIconStyled>
      );
    }

    if (hasIcon && this.props.iconRight) {
      inputContent = (
        <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}>
          <InputStyled {...this.props.field}
                       error={this.props.error}
                       placeholder={this.props.placeholderText}
                       disabled={this.props.disabled}
                       type={this.props.type}>
          </InputStyled>
          <IconSmallStyled hasIconRight={this.props.iconRight}>{this.props.iconRight}</IconSmallStyled>
        </InputboxIconStyled>
      );
    }

    if (hasIcon && this.props.buttonRight) {
      inputContent = (
        <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}>
          <InputStyled {...this.props.field}
                       error={this.props.error}
                       placeholder={this.props.placeholderText}
                       disabled={this.props.disabled}
                       type={this.props.type}></InputStyled>
          <ButtonWrapperStyled disabled={this.props.disabled}>{this.props.buttonRight}</ButtonWrapperStyled>
        </InputboxIconStyled>
      );
    }

    if (hasButton && this.props.buttonOutsideRight) {
      inputContent = (
        <FlexStyled>
          <InputboxIconStyled error={this.props.error}
                              disabled={this.props.disabled}>
            <InputStyled {...this.props.field}
                         error={this.props.error}
                         placeholder={this.props.placeholderText}
                         disabled={this.props.disabled}
                         type={this.props.type}></InputStyled>
          </InputboxIconStyled>
          <ButtonOutsideRightStyled disabled={this.props.disabled}>
            {this.props.buttonOutsideRight}
          </ButtonOutsideRightStyled>
        </FlexStyled>
      );
    }

    if (hasIcon && this.props.iconFront) {
      inputContent = (
        <FlexStyled>
          <IconOutsideLeftStyled>{this.props.iconFront}</IconOutsideLeftStyled>
          <InputboxIconStyled error={this.props.error}
                              disabled={this.props.disabled}>
            <InputStyled {...this.props.field}
                         error={this.props.error}
                         placeholder={this.props.placeholderText}
                         disabled={this.props.disabled}
                         type={this.props.type}></InputStyled>
          </InputboxIconStyled>
        </FlexStyled>
      );
    }

    if (hasIcon && this.props.iconEnd) {
      inputContent = (
        <FlexStyled>
          <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}>
            <InputStyled {...this.props.field}
                         placeholder={this.props.placeholderText}
                         error={this.props.error}
                         disabled={this.props.disabled}
                         type={this.props.type}></InputStyled>
          </InputboxIconStyled>
          <IconOutsideLeftStyled>{this.props.iconEnd}</IconOutsideLeftStyled>
        </FlexStyled>
      );
    }

    if (hasIcon && this.props.required) {
      inputContent = (
        <InputboxIconStyled error={this.props.error} disabled={this.props.disabled}>
          <InputStyled {...this.props.field}
                       placeholder={this.props.placeholderText}
                       error={this.props.error}
                       disabled={this.props.disabled}
                       type={this.props.type}></InputStyled>
        </InputboxIconStyled>
      );
    }

    const hintContent = (
      <HintStyled>{this.props.hint}</HintStyled>
    );

    return (
      <WrapperStyled style={this.props.style}>
        <LabelStyled error={!!errors}
                     disabled={this.props.disabled}>
          {label}
        </LabelStyled>
        {inputContent}
        {this.props.hint && hintContent}
        {touched && errors && <ErrorMessageStyled>{errors}</ErrorMessageStyled>}
      </WrapperStyled>
    );
  }
}
