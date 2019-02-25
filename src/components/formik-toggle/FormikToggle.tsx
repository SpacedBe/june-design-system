/**
 * @class FormikToggle
 */

import * as React from 'react';
import styles from "./formik-toggle.scss";

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
  disabled: boolean;
  validationMessage: string;
  label: string;
  placeholderText: string;
};

export class FormikToggle extends React.Component<Props> {
  render() {
    const FieldName = this.props.field.name;
    const errors = this.props.form.errors[FieldName];
    const touched = this.props.form.touched[FieldName];

    const classes = cx();

    return (
      <div>
        <input className={classes}
               {...this.props.field}
               type="checkbox"
               disabled={this.props.disabled}/>

        <label htmlFor={FieldName}>
          {this.props.label}
        </label>

        {touched &&  errors && <div className="error">{errors}</div>}
      </div>
    )
  }
}
