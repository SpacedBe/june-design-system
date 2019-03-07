/**
 * @class FormikInput
 */

import * as React from 'react';
//import {loadStyleVariables} from "../../scripts/loadStyleVariables"
import styles from "./formik-input.scss";
import styled from 'styled-components';

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
  classNames?: string[],
};

const InputBoxRight = styled.div`
  border: 2px solid #cccccc;
  padding: 10px 10px 10px 10px;
  border-radius: 2.5px;
  background-color: white;
  outline: none;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;

`;

const InputBoxLeft = styled.div`
  border: 2px solid #cccccc;
  padding: 10px 10px 10px 10px;
  border-radius: 2.5px;
  background-color: white;
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

const Input = styled.input`
  border: none;
  outline: none;
`

const IconSmall = styled.span`
  font-size: 1.5em;
`
const IconBig = styled.span`
  font-size: 2em;
`

const ButtonSmall = styled.button`
font-size: 1em;
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

    let Tag = 'div';
    let buttonContent;

    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.buttonRight || this.props.iconFront || this.props.iconEnd || this.props.required;

    const hasButton = this.props.buttonOutsideRight || this.props.toolTip;

    // const className = cx(
    //   'input',
    //   { 'input--disabled': this.props.disabled },
    //   { 'input--error': this.props.error },
    //   { 'input--focussed': this.props.focussed },
    //   this.props.classNames,
    // );



    if (!hasIcon) {
      buttonContent = (
        <InputBoxLeft >
          <Input {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type} ></Input>
        </InputBoxLeft>

      )
    }

    if (hasIcon && this.props.iconLeft){
      buttonContent = (
        <InputBoxLeft>
          <IconSmall className={styles.icon}>{this.props.iconLeft}</IconSmall>
          <InputWithIconLeft className={styles.inputWithIconLeft}{...this.props.field} placeholder={this.props.placeholderText} type={this.props.type}></InputWithIconLeft>
        </InputBoxLeft>
      )
    }

    if(hasIcon && this.props.iconRight){
      buttonContent = (
        <InputBoxRight>
          <Input className={styles.inputWithIconLeft}{...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          <IconSmall className={styles.icon}>{this.props.iconRight}</IconSmall>
        </InputBoxRight>
      )
    }

    if (hasIcon && this.props.buttonRight) {
      buttonContent = (
        <InputBoxLeft>
          <Input className={styles.inputWithIconRight} {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          <ButtonSmall>{this.props.buttonRight}</ButtonSmall>
        </InputBoxLeft>
      )
    }


    if (hasButton && this.props.buttonOutsideRight) {
      buttonContent = (
        <Flex>
          <InputBoxRight>
            <Input className={styles.inputWithIconRight}{...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          </InputBoxRight>
          <ButtonSmall>{this.props.buttonOutsideRight}</ButtonSmall>
        </Flex>
      )
    }


    if(hasIcon && this.props.iconFront){
      buttonContent = (
        <Flex>
          <IconBig>{this.props.iconFront}</IconBig>
          <InputBoxLeft >
            <Input className={styles.inputWithIconRight}{...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          </InputBoxLeft>
        </Flex>
      )
    }

    if(hasIcon && this.props.iconEnd){
      buttonContent = (
        <Flex>
          <InputBoxLeft>
            <Input className={styles.inputWithIconRight}{...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
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

          <InputBoxRight>
            <Input className={styles.inputWithIconRight}{...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
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

          <InputBoxRight>
            <Input className={styles.inputWithIconRight}{...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></Input>
          </InputBoxRight>
        </div>
      )
    }




    return (
      <Tag>


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
