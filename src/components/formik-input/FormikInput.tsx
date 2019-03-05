/**
 * @class FormikInput
 */

import * as React from 'react';
import styles from "./formik-input.scss";

var classNames = require('classnames/bind');
const cx = classNames.bind(styles);

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
  classNames?: string[],
};

export class FormikInput extends React.Component<Props> {
  render() {
    const FieldName = this.props.field.name;
    const errors = (this.props.serverErrors && this.props.serverErrors[FieldName]) || this.props.form.errors[FieldName];
    const touched = this.props.form.touched[FieldName];

    let Tag = 'div';
    let buttonContent;

    const hasIcon = this.props.iconLeft || this.props.iconRight;

    const className = cx(
      'input',
      { 'input--disabled': this.props.disabled },
      { 'input--error': this.props.error },
      { 'input--focussed': this.props.focussed },
      this.props.classNames,
    );


    if (hasIcon && this.props.iconLeft){
      buttonContent = (
        <div className={className}>
          <span className={styles.icon}>{this.props.iconLeft}</span>
          <input className={styles.inputWithIconLeft}{...this.props.field} placeholder={this.props.placeholderText}  disabled={this.props.disabled} type={this.props.type}></input>
        </div>

      )
    }

    if(hasIcon && this.props.iconRight){
      buttonContent = (
        <div className={className}>
          <input className={styles.inputWithIconRight}{...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></input>
          <span className={styles.icon}>{this.props.iconRight}</span>
        </div>
      )
    }
    if (!hasIcon) {
      buttonContent = (
        <input className={className} {...this.props.field} placeholder={this.props.placeholderText} disabled={this.props.disabled} type={this.props.type}></input>
      )
    }
    return (
      <div className={styles.inputGroup}>
        <label htmlFor={FieldName}>
          {this.props.label}
        </label>

        {buttonContent}
        <Tag className={styles.div}>

        </Tag>
        {
          touched && errors && <div className={styles.error}>{errors}</div>
        }
      </div>
    )
  }
}
