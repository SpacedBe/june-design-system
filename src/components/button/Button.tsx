/**
 * @class Button
 *
 */

import * as React from 'react';
import {Loader} from "../loader/Loader";
import styled from 'styled-components';

import {loadStyleVariables} from "../../scripts/loadStyleVariables";

const styleVariables = loadStyleVariables();

const sizes = {
  xsmall: '20px',
  small: '30px',
  medium: '40px',
  large: '51px',
};

const colors = {
  red: `${styleVariables.colorRed}`,
  green: `${styleVariables.colorGreen}`,
  blue: `${styleVariables.colorBlue}`,
  yellow: `${styleVariables.colorYellow}`,
  facebook: `${styleVariables.colorBlueFacebook}`
};

type Props = {
  id?: string,
  label?: string | React.ReactNode,
  iconLeft?: any,
  iconRight?: any,
  iconOnly?: any,
  iconButtonWithBorder?: any,
  outlined?: boolean,
  loading?: boolean,
  wide?: boolean,
  size?: 'xsmall' | 'small' | 'medium' | 'large',
  rounded?: boolean,
  clear?: boolean,
  color?: 'red' | 'green' | 'blue' | 'yellow' | 'facebook',
  disabled?: boolean,
  target?: string,
  type?: "button" | "reset" | "submit" | undefined,
  onClick?: any,
  className?: string;
  percentageDone?: any;
};

const Icon = styled.div`
  display: flex;
  align-items: center;
  font-size: ${styleVariables.fontSizeM};
  fill: ${styleVariables.colorWhite};
  &:hover {
    fill: ${styleVariables.colorWhite};
  }
`;

const IconOnly = styled.span`
  fill: ${styleVariables.colorWhite};
  padding: 0.2em;
  font-size: ${styleVariables.fontSizeM};
`;

const IconLeft = styled.span`
  margin-right: 8px;
`;

const IconRight = styled.span`
  margin-left: 8px;
`;

const Label = styled.span`
  @include transition(opacity);
  opacity: 1;
  font-family: ${styleVariables.fontPrimary}
`;
const OnlyIconButton = styled.button`
  svg {
    fill: ${styleVariables.colorGray};
    font-size: ${styleVariables.fontSizeXxl};
  }
  background-color: transparent;
  border: none;
`;

const OnlyIconWithBorder = styled(OnlyIconButton)`
  border: 2px solid ${styleVariables.colorPrimaryLight};
  width: 30px;
  height: 30px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

const NormalButton = styled.button<{
  target?: string;
  onClick?: void;
  size?: string;
  rounded?: boolean;
  clear?: boolean;
  outlined?: boolean;
  disabled?: boolean;
  wide?: boolean;
  color?: string;
  inverted?: boolean;
}>`
  background: ${props => {
  if (props.outlined || props.clear) {
    return `none`;
  } else if (props.disabled) {
    return `${styleVariables.colorGray}`;
  } else if (props.color) {
    return colors[props.color || ""];
  } else {
    return `${styleVariables.colorPrimary}`;
  }
}};
  border-radius: ${props =>
  props.rounded ? `${styleVariables.compSmallSize}` : `${styleVariables.compRadius}`};

  border: 2px solid ${props => {
  if (props.outlined) {
    return colors[props.color || ""];
  }
  if (props.disabled) {
    return `2px solid ${styleVariables.colorGray}`;
  }
  if (props.color) {
    return colors[props.color || ""];
  } else {
    return `${styleVariables.colorPrimary}`;
  }
}};

  color: ${props => {
  if (props.outlined || props.clear) {
    return colors[props.color || ""];
  } else {
    return `${styleVariables.colorWhite}`;
  }
}};
  cursor: pointer;
  font-family: ${styleVariables.fontbuttons};
  font-weight: ${styleVariables.fontWeightBold};
  font-size: ${styleVariables.fontSizeM};
  outline: 0;
  padding: 0 ${styleVariables.gutter};
  position: relative;
  text-align: center;
  width: ${props => (props.wide ? "100%" : "")};
  text-decoration: none;
  letter-spacing: 0.8px;
  transition: 0.2s ease-in-out;
  line-height: ${props => sizes[props.size || "medium"]};

  &:hover {
    background-color: ${styleVariables.greenDarker};
    color: ${styleVariables.colorWhite};
    border: 2px solid  ${styleVariables.greenDarker}
  }
`;

export class Button extends React.Component<Props> {
  static defaultProps = {
    size: 'medium',
  };

  render() {
    let buttonContent;
    let isDisabled = (this.props.loading || this.props.disabled);

    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.iconOnly || this.props.iconButtonWithBorder;

    if (!hasIcon) {
      buttonContent = (
        <NormalButton
          className={this.props.className}
          id={this.props.id}
          disabled={isDisabled}
          color={this.props.color}
          wide={this.props.wide}
          type={this.props.type}
          size={this.props.size}
          clear={this.props.clear}
          onClick={this.props.onClick}
          outlined={this.props.outlined}
          rounded={this.props.rounded}
          target={this.props.target}
        >
          <div>
            <Label>{this.props.children}</Label>
            <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
          </div>
        </NormalButton>
      );
    }

    if (hasIcon && this.props.iconLeft) {
      buttonContent = (
        <NormalButton
          className={this.props.className}
          id={this.props.id}
          disabled={isDisabled}
          color={this.props.color}
          wide={this.props.wide}
          type={this.props.type}
          size={this.props.size}
          clear={this.props.clear}
          onClick={this.props.onClick}
          outlined={this.props.outlined}
          rounded={this.props.rounded}
          target={this.props.target}
        >
          <div>
            <Icon>
              <IconLeft>{this.props.iconLeft}</IconLeft>
              <Label>{this.props.children}</Label>
            </Icon>
            <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
          </div>
        </NormalButton>
      );
    }

    if (hasIcon && this.props.iconRight) {
      buttonContent = (
        <NormalButton
          className={this.props.className}
          id={this.props.id}
          disabled={isDisabled}
          color={this.props.color}
          wide={this.props.wide}
          type={this.props.type}
          size={this.props.size}
          clear={this.props.clear}
          onClick={this.props.onClick}
          outlined={this.props.outlined}
          rounded={this.props.rounded}
          target={this.props.target}
        >
          <div>
            <Icon>
              <Label>{this.props.children}</Label>
              <IconRight>{this.props.iconRight}</IconRight>
            </Icon>
            <Loader loading={this.props.loading} percentage={this.props.percentageDone}/>
          </div>
        </NormalButton>
      );
    }

    if (hasIcon && this.props.iconOnly) {
      buttonContent = (
        <OnlyIconButton
          className={this.props.className}
          id={this.props.id}
        >
          <div>
            <IconOnly>{this.props.iconOnly}</IconOnly>
          </div>
        </OnlyIconButton>
      );
    }

    if (hasIcon && this.props.iconButtonWithBorder) {
      buttonContent = (
        <OnlyIconWithBorder onClick={this.props.onClick} className={this.props.className} id={this.props.id}>
          <Flex>
            <IconOnly>{this.props.iconButtonWithBorder}</IconOnly>
          </Flex>
        </OnlyIconWithBorder>
      );
    }

    return (
      <div>
        {
          buttonContent
        }
      </div>

    );
  }
}
