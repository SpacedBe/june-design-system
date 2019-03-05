/**
 * @class Button
 */

import * as React from 'react';
import {Loader} from "../loader/Loader";
import styles from "./button.scss";


var classNames = require('classnames/bind');
const cx = classNames.bind(styles);

type Props = {
  id?: string,
  label?: string | React.ReactNode,
  component?: any,

  iconLeft?: any,
  iconRight?: any,
  iconOnly?: any,
  outlined?: boolean,
  loading?: boolean,
  percentageDone?: number,
  wide?: boolean,
  size?: 'small' | 'medium' | 'large';
  rounded?: boolean,
  spaced?: boolean,
  clear?: boolean,
  color?: string,
  href?: string,
  disabled?: boolean,
  target?: string,
  type?: string,
  onClick?: (id: number) => void,
  successMessage?: any[],
  classNames?: string[],
};

export class Button extends React.Component<Props> {
  render() {
    let buttonContent;
    let isDisabled = (this.props.loading || this.props.disabled);

    let Tag = 'button';

    if (this.props.href) {
      Tag = 'a';
    }

    if (this.props.component) {
      Tag = this.props.component;
    }

    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.iconOnly;

    if (hasIcon && this.props.iconLeft) {
      buttonContent = (
        <div>
          <div className={styles.icon}>
            <span className={styles["icon-left"]}>{this.props.iconLeft}</span>
            <span className={styles.label}>{this.props.children}</span>
          </div>
          <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
        </div>
      )

    }

    if (hasIcon && this.props.iconRight) {
      buttonContent = (
        <div>
          <div className={styles.icon}>
            <span className={styles.label}>{this.props.children}</span>
            <span className={styles["icon-right"]}>{this.props.iconRight}</span>
          </div>
          <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
        </div>
      )
    }

    if (hasIcon && this.props.iconOnly) {
      buttonContent = (
        <div>
          <div className={styles.icon}>
            {this.props.iconOnly}
          </div>
        </div>
      )
    }

    if (!hasIcon) {
      buttonContent = (
        <div>
          <span className={styles.label}>{this.props.children}</span>
          <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
        </div>
      )
    }


    const className = cx(
      'button',
      {[`button--${this.props.color}`]: !!this.props.color},
      {'button--wide': this.props.wide},
      {'button--spaced': this.props.spaced},
      {'button--clear': this.props.clear},
      {'button--small': this.props.size === 'small'},
      {'button--large': this.props.size === 'large'},
      {'button--loading': this.props.loading},
      {'button--outlined': this.props.outlined},
      {'button--round': this.props.rounded},
      {'button--icon': hasIcon},
      this.props.classNames,
    );

    return (
      <Tag
        id={this.props.id}
        className={className}
        onClick={this.props.onClick}
        disabled={isDisabled}
        href={this.props.href}
        type={this.props.type}
        target={this.props.target}>
        {buttonContent}
      </Tag>
    );
  }
}
