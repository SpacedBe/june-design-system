/**
 * @class Button
 */

import * as React from 'react';
import {Loader} from "../..";
import styles from "./button.scss";


var classNames = require('classnames/bind');
const cx = classNames.bind(styles);

type Props = {
  id: string,
  label: string | React.ReactNode,
  component: any,

  icon: string,
  outlined: boolean,
  loading: boolean,
  percentageDone: number,
  wide: boolean,
  size: 'small' | 'medium' | 'large';
  rounded: boolean,
  spaced: boolean,
  clear: boolean,
  color: string,
  href: string,
  disabled: boolean,
  target: string,
  onClick: (id: number) => void,
  successMessage: any[],
  classNames: string[],
};

export class Button extends React.Component<Props> {
  render() {
    let Tag = 'button';

    if (this.props.href) {
      Tag = 'a';
    }

    if (this.props.component) {
      Tag = this.props.component;
    }

    let icon = null;
    // if (this.props.icon) icon = (<span className={`button__icon ${this.props.icon}`}/>);
    if (this.props.icon) icon = (<i className={`material-icons ${this.props.icon}`}/>);

    const className = cx(
      'button',
      {[`button--${this.props.color}`]: !!this.props.color},
      {'button--wide': this.props.wide},
      {'button--spaced': this.props.spaced},
      {'button--small': this.props.size === 'small'},
      {'button--large': this.props.size === 'large'},
      {'button--loading': this.props.loading},
      {'button--outlined': this.props.outlined},
      {'button--round': this.props.rounded},
      {'button--icon-only': this.props.icon && !this.props.label},
      {'button--clear': this.props.clear},
      this.props.classNames,
    );

    return (
      <Tag
        id={this.props.id}
        className={className}
        onClick={this.props.onClick}
        disabled={this.props.loading || this.props.disabled}
        href={this.props.href}
        target={this.props.target}>
        {icon}
        <span className={styles.label}>{this.props.children}</span>
        <Loader loading={this.props.loading} percentage={this.props.percentageDone} />
      </Tag>
    );
  }
}
