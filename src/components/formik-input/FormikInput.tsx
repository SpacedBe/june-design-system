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
  classNames?: string[],
};

export class FormikInput extends React.Component<Props> {
  render() {
    const FieldName = this.props.field.name;
    const errors = (this.props.serverErrors && this.props.serverErrors[FieldName]) || this.props.form.errors[FieldName];
    const touched = this.props.form.touched[FieldName];

    let Tag = 'input';


    const className = cx(
      'input',
      { 'input--disabled': this.props.disabled },
      { 'input--error': this.props.error },
      { 'input--focussed': this.props.focussed },
      this.props.classNames,
    );

    return (
      <div className={styles.inputGroup}>
        <label htmlFor={FieldName}>
          {this.props.label}
        </label>

        <Tag
          className={className}
          {...this.props.field}
          type={this.props.type}
          disabled={this.props.disabled}
          placeholder={this.props.placeholderText}>
          </Tag>
        {
          touched && errors && <div className={styles.error}>{errors}</div>
        }
      </div>
    )
  }
}
