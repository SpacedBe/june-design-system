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
  type: 'text' | 'number' | 'password';
  disabled: boolean;
  validationMessage: string;
  label: string;
  placeholderText: string;
};

export class FormikInput extends React.Component<Props> {
  render() {
    const FieldName = this.props.field.name;
    const errors = this.props.form.errors[FieldName];
    const touched = this.props.form.touched[FieldName];

    const classes = cx(
      'input',
    );

    return (
      <div className={styles.inputGroup}>
        <label htmlFor={FieldName}>
          {this.props.label}
        </label>

        <input className={classes}
               {...this.props.field}
               type={this.props.type}
               disabled={this.props.disabled}
               placeholder={this.props.placeholderText}/>
        {
          touched &&  errors && <div className="error">{errors}</div>
        }
      </div>
    )
  }
}
