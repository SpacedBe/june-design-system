/**
 * @class Button
 */

import * as React from 'react';


import {Loader} from "../..";

var classNames = require('classnames/bind');
import styles from "./button.scss";
const cx = classNames.bind(styles);

type Props = {
  id: string,

  label: string | React.ReactNode,

  component: any,

  icon: string,
  outlined: boolean,
  loading: boolean,
  disabled: boolean,
  multiline: boolean,
  wide: boolean,
  rounded: boolean,
  spaced: boolean,
  spacedHorizontal: boolean,
  noBorder: boolean,
  xsWide: boolean,
  minWidth: boolean,
  color: string,
  href: string,
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
    if (this.props.icon) icon = (<span className={`button__icon ${this.props.icon}`}/>);

    const className = cx(
      'button',
      {[`button--${this.props.color}`]: !!this.props.color},
      {'button--wide': this.props.wide},
      {'button--spaced': this.props.spaced},
      {'button--spaced-horizontal': this.props.spacedHorizontal},
      {'button--loading': this.props.loading},
      {'button--outlined': this.props.outlined},
      {'button--round': this.props.rounded},
      {'button--multiline': this.props.multiline},
      {'button--icon-only': this.props.icon && !this.props.label},
      {'button--no-border': this.props.noBorder},
      {'button--xs-wide': this.props.xsWide},
      {'button--min-width': this.props.minWidth},
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
        <span className={styles.label}>
            {this.props.children}
          </span>

        <Loader loading={this.props.loading}/>
      </Tag>
    );
  }
}
