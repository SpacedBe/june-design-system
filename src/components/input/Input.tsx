/**
 * @class Input
 */

import * as React from 'react';
import styles from "./input.scss";

var classNames = require('classnames/bind');
const cx = classNames.bind(styles);

type Props = {
  type: 'text' | 'number' | 'password',
  state: 'resting' | 'error' | 'success' | 'disabled'
  disabled: boolean,
  validationMessage: string,
  placeholderText: string,
};

export class Input extends React.Component<Props> {
  render() {
    const classes = cx(
      'input',
      `input--${this.props.state}`
    );

    return (
      <div className={styles.inputGroup}>
        <input className={classes}
               type={this.props.type}
               disabled={this.props.disabled}
               placeholder={this.props.placeholderText} />
        <div className={this.props.state === 'error' ? styles.errorValidationMessage : styles.validationMessage}>
          {this.props.validationMessage}
        </div>
      </div>
    )
  }
}
