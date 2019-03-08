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

const styleVariables = loadStyleVariables();

const sizes = {
  small: '30px',
  medium: '40px',
  large: '51px',
};

const colors = {
  red: `${styleVariables.red}`,
  green: `${styleVariables.green}`,
  blue: `${styleVariables.blue}`,
};

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
  size?: 'small' | 'medium' | 'large',
  rounded?: boolean,
  spaced?: boolean,
  clear?: boolean,
  color?: 'red' | 'green' | 'blue',
  href?: string,
  disabled?: boolean,
  target?: string,
  type?: string,
  onClick?: (id: number) => void,
  successMessage?: any[],
  // classNames?: string[],
};


const Icon = styled.div`
  display: flex;
  align-items: center;
`

const IconLeft = styled.span`
  margin-right: 8px;
`

const IconRight = styled.span`
 margin-left: 8px;
`

const Label = styled.span`
  @include transition(opacity);
    opacity: 1;
`

const NormalButton = styled.button<{target?: string, onClick?: void, size?: string, rounded?: boolean, clear?: boolean, outlined?: boolean, disabled?: boolean, wide?: boolean, color?: string}>`
  background: ${props => {
    if (props.outlined || props.clear) {
				return `none`
      } else if (props.disabled){
        return `${styleVariables.gray}`
      } else if(props.color) {
         return  colors[props.color || 'green']
      } else {
        return `${styleVariables.green}`
      }
    }
  }};
  border-radius: ${props => props.rounded ? `${styleVariables.compSmallSize}` : `${styleVariables.compRadius}`};
  border:  ${props => {
    if (props.outlined) {
				return `2px solid ${styleVariables.green}`
      } else if(props.disabled){
        return `2px solid ${styleVariables.gray}`
      } else if (props.clear){
        return `none`
      }else if(props.color) {
         return colors[props.color || '2px solid green']
      } else {
        return `2px solid ${styleVariables.green}`
      }
    }
  }};
  color: ${props => {
    if (props.outlined || props.clear) {
				return `${styleVariables.green}`
      } else if(props.color = 'red'){
         return `${styleVariables.colorWhite}`
      } else{
        return `${styleVariables.colorWhite}`
      }
    }
  }};
  cursor: pointer;
  font-family: ${styleVariables.fontbuttons};
  font-weight: 600;
  outline: 0;
  padding: 0 ${styleVariables.gutter};
  position: relative;
  text-align: center;
  width: ${props => props.wide ? `100%` : ``}
  text-decoration: none;
  letter-spacing: 0.8px;
  transition: .2s ease-in-out;
  line-height: ${props => sizes[props.size || 'medium']};
}`
export class Button extends React.Component<Props> {
   static defaultProps = {
    size: 'medium'
  };
  render() {
    let buttonContent;
    let isDisabled = (this.props.loading || this.props.disabled);

    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.iconOnly;

      if (!hasIcon) {
      buttonContent = (
        <div>
            <Label>{this.props.children}</Label >
            <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
        </div>
      )
    }

    if (hasIcon && this.props.iconLeft) {
      buttonContent = (
        <div>
           <Icon>
            <IconLeft>{this.props.iconLeft}</IconLeft>
            <Label>{this.props.children}</Label>
          </Icon>
          <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
        </div>
      )
    }

    if (hasIcon && this.props.iconRight) {
      buttonContent = (
        <div>
          <Icon>
            <Label>{this.props.children}</Label>
            <IconRight>{this.props.iconRight}</IconRight>
          </Icon>
          <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
        </div>
      )
    }

    if (hasIcon && this.props.iconOnly) {
      buttonContent = (
          <div>
            <Icon>{this.props.iconOnly}</Icon>
          </div>
      )
    }

    return (
      //@ts-ignore
      <NormalButton
        id={this.props.id}
        disabled={isDisabled}
        // href={this.props.href}
        color={this.props.color}
        wide={this.props.wide}
        type={this.props.type}
        size={this.props.size}
        clear={this.props.clear}
        //onClick={this.props.onClick}
        outlined={this.props.outlined}
        rounded={this.props.rounded}
        target={this.props.target}
        >
        {buttonContent}
      </NormalButton>
    );
  }
}
