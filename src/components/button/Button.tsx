/**
 * @class Button
 *
 */

import * as React from 'react';
import {Loader} from "../loader/Loader";
// todo: refactor to style components
// import styles from "./button.scss";
import styled from 'styled-components';
import { loadStyleVariables } from "../../scripts/loadStyleVariables";


// var classNames = require('classnames/bind');
// const cx = classNames.bind(styles);

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
  // classNames?: string[],
};

const styleVariables = loadStyleVariables();

const NormalButton = styled.button`
  background-color: ${styleVariables.green};
  border: 2px solid ${styleVariables.green};
  border-radius: ${styleVariables.compRadius};
  color: ${styleVariables.white};
  cursor: pointer;
  font-family: ${styleVariables.fontbuttons};
  font-weight: 600;
  line-height: (${styleVariables.compSize} - 4px); // 4px = border-top + border-bottom
  outline: 0;
  padding: 0 ${styleVariables.gutter};
  position: relative;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.8px;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
`

const IconLeft = styled.span`
  margin-right: 8px;
`

const Label = styled.span`
  @include transition(opacity);
    opacity: 1;
`
export class Button extends React.Component<Props> {
  render() {
    let buttonContent;
    let isDisabled = (this.props.loading || this.props.disabled);

    let Tag = 'div';

    if (this.props.href) {
      Tag = 'a';
    }

    if (this.props.component) {
      Tag = this.props.component;
    }

    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.iconOnly;

    if (hasIcon && this.props.iconLeft) {
      buttonContent = (
        // <NormalButton>
        //   <div className={styles.icon}>
        //     <span className={styles["icon-left"]}>{this.props.iconLeft}</span>
        //     <span className={styles.label}>{this.props.children}</span>
        //   </div>
        //   <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
        // </NormalButton>
        <NormalButton>
          <Icon>
            <IconLeft>{this.props.iconLeft}</IconLeft>
            <Label>{this.props.children}</Label>
          </Icon>
          <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
        </NormalButton>
      )

    }

    if (hasIcon && this.props.iconRight) {
      buttonContent = (
        <NormalButton>
          <div>
            <span>{this.props.children}</span>
            <span>{this.props.iconRight}</span>
          </div>
          <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
        </NormalButton>
      )
    }

    if (hasIcon && this.props.iconOnly) {
      buttonContent = (
        <NormalButton>
          <div>
            {this.props.iconOnly}
          </div>
        </NormalButton>
      )
    }

    if (!hasIcon) {
      buttonContent = (
        // <NormalButton>
        //   <span className={styles.label}>{this.props.children}</span>
        //   <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
        // </NormalButton>
        <div>
          <NormalButton>
            <span>{this.props.children}</span>
            <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
          </NormalButton>
        </div>

        
      )
    }


    // const className = cx(
    //   'button',
    //   {[`button--${this.props.color}`]: !!this.props.color},
    //   {'button--wide': this.props.wide},
    //   {'button--spaced': this.props.spaced},
    //   {'button--clear': this.props.clear},
    //   {'button--small': this.props.size === 'small'},
    //   {'button--large': this.props.size === 'large'},
    //   {'button--loading': this.props.loading},
    //   {'button--outlined': this.props.outlined},
    //   {'button--round': this.props.rounded},
    //   {'button--icon': hasIcon},
    //   this.props.classNames,
    // );

    return (
      //@ts-ignore
      <Tag
        id={this.props.id}
        // className={className}
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
