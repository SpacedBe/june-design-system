/**
 * @class FormikInput
 */

import * as React from 'react';
//import {loadStyleVariables} from "../../scripts/loadStyleVariables"
import styles from "./formik-input.scss";
import styled from 'styled-components';

//var classNames = require('classnames/bind');
//const cx = classNames.bind(styles);

//const styleVariables = loadStyleVariables();

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
  classNames?: string[],
};

const InputBox = styled.div`
  border: 2px solid #cccccc;
  padding: 10px 100px 10px 10px;
  border-radius: 2.5px;
  background-color: white;
`;

const InputWithIconLeft = styled.input`
 border: none;
 margin-left: 10px;
`

const Input = styled.input`
  border: none;
`

const IconSvg = styled.span`
  padding-top: 5px;
`

const Flex = styled.div`
 display: flex;
 align-items: center;
`

export class FormikInput extends React.Component<Props> {
  render() {
    const FieldName = this.props.field.name;
    const errors = (this.props.serverErrors && this.props.serverErrors[FieldName]) || this.props.form.errors[FieldName];
    const touched = this.props.form.touched[FieldName];

    let Tag = 'div';
    let buttonContent;

    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.buttonRight || this.props.iconFront || this.props.iconEnd;

    // const className = cx(
    //   'input',
    //   { 'input--disabled': this.props.disabled },
    //   { 'input--error': this.props.error },
    //   { 'input--focussed': this.props.focussed },
    //   this.props.classNames,
    // );



    if (!hasIcon) {
      buttonContent = (
        <InputBox>
          <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
        </InputBox>

      )
    }

    if (hasIcon && this.props.iconLeft){
      buttonContent = (
        <InputBox>
          <IconSvg className={styles.icon}>{this.props.iconLeft}</IconSvg>
          <InputWithIconLeft className={styles.inputWithIconLeft}{...this.props.field} placeholder={this.props.placeholderText} type={this.props.type}></InputWithIconLeft>
        </InputBox>
      )
    }

    if(hasIcon && this.props.iconRight){
      buttonContent = (
        <InputBox>
          <Input className={styles.inputWithIconLeft}{...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          <IconSvg className={styles.icon}>{this.props.iconRight}</IconSvg>
        </InputBox>
      )
    }

    if (hasIcon && this.props.buttonRight) {
      buttonContent = (
        <InputBox>
          <Input className={styles.inputWithIconRight}{...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          <IconSvg className={styles.icon}>{this.props.buttonRight}</IconSvg>
        </InputBox>
      )
    }

    if(hasIcon && this.props.iconFront){
      buttonContent = (
        <Flex>
          <IconSvg>{this.props.iconFront}</IconSvg>
          <InputBox >
            <Input className={styles.inputWithIconRight}{...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          </InputBox>
        </Flex>
      )
    }

    if(hasIcon && this.props.iconEnd){
      buttonContent = (
        <Flex className={styles.flex}>
          <InputBox>
            <Input className={styles.inputWithIconRight}{...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          </InputBox>
          <IconSvg>{this.props.iconEnd}</IconSvg>
        </Flex>
      )
    }



    return (
      <Tag>
        <label htmlFor={FieldName}>
          {this.props.label}
        </label>

        {buttonContent}
        <Tag className={styles.div}>

        </Tag>
        {
          touched && errors && <div className={styles.error}>{errors}</div>
        }
      </Tag>
    )
  }
}
