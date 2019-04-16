/**
 * @class Button
 *
 */

import * as React from 'react';
import styled from 'styled-components';

import {loadStyleVariables} from "../../scripts/loadStyleVariables";
import {Spinner} from "../spinner/spinner";

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
  cursor: pointer;
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
  text-transform: capitalize;
`;

const OnlyIconButton = styled.button`
  background-color: transparent;
  border: none;
`;

const OnlyIconWithBorder = styled(OnlyIconButton)`
  border: 2px solid ${styleVariables.colorPrimaryLight};
  width: 30px;
  height: 30px;
`;

const FlexStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const NormalButton = styled.button<{
  target?: string;
  onClick?: void;
  size?: string;
  rounded?: boolean;
  clear?: boolean;
  disabled?: boolean;
  wide?: boolean;
  color?: string;
  inverted?: boolean;
}>`
  background-color: ${props => {
    if (props.clear) {
      return '';
    } else if (props.disabled) {
      return 'var(--color-gray)';
    } else if (props.color) {
      return colors[props.color || ""];
    } else {
      return 'var(--color-primary)';
    }
  }};
  border-radius: ${props => props.rounded ? `${styleVariables.compSmallSize}` : `${styleVariables.compRadius}`};
  border: 2px solid ${props => {
    if (props.clear) {
      return colors[props.color || ""];
    } else if (props.color) {
      return colors[props.color || ""];
    } else {
      return 'var(--color-primary)';
    }
  }};
 
  color: ${props => {
    if (props.clear) {
      return colors[props.color || 'green'];
    } else {
      return 'var(--color-white)';
    }
  }};
  
  ${props => props.clear ? `border: 2px solid ${colors[props.color || 'green']}` : ''};
  ${props => props.disabled ? 'border: 2px solid var(--color-gray)' : ''};
  ${props => props.disabled ? '' : 'cursor: pointer'};
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
    ${props => props.disabled ? '' : 'background-color: var(--color-primary-shade)'};
    ${props => props.disabled ? '' : 'border: 2px solid var(--color-primary-shade)'};
    ${props => props.disabled ? '' : 'color: var(--color-white)'};
  }
`;

const ButtonContainerStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  > *:nth-child(2) {
    margin-left: var(--spacing-m);
  }
`;

export class Button extends React.Component<Props> {
  static defaultProps = {
    size: 'medium',
    onClick: () => {
    },
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
          rounded={this.props.rounded}
          target={this.props.target}
        >
          <div>
            <Label>{this.props.children}</Label>
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
          rounded={this.props.rounded}
          target={this.props.target}
        >
          <div>
            <Icon>
              <IconLeft>{this.props.iconLeft}</IconLeft>
              <Label>{this.props.children}</Label>
            </Icon>
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
          rounded={this.props.rounded}
          target={this.props.target}
        >
          <div>
            <Icon>
              <Label>{this.props.children}</Label>
              <IconRight>{this.props.iconRight}</IconRight>
            </Icon>
          </div>
        </NormalButton>
      );
    }

    if (hasIcon && this.props.iconOnly) {
      buttonContent = (
        <OnlyIconButton {...this.props}
                        className={this.props.className}
                        id={this.props.id}
                        onClick={this.props.onClick}>
          <div>
            <IconOnly>{this.props.iconOnly}</IconOnly>
          </div>
        </OnlyIconButton>
      );
    }

    if (hasIcon && this.props.iconButtonWithBorder) {
      buttonContent = (
        <OnlyIconWithBorder onClick={this.props.onClick}
                            className={this.props.className}
                            id={this.props.id}>
          <FlexStyled>
            <IconOnly>{this.props.iconButtonWithBorder}</IconOnly>
          </FlexStyled>
        </OnlyIconWithBorder>
      );
    }

    const spinnerContent = (
      <Spinner color={'var(--color-primary)'}/>
    );

    return (
      <ButtonContainerStyled>
        {buttonContent}
        {this.props.loading && spinnerContent}
      </ButtonContainerStyled>

    );
  }
}
