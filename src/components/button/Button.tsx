/**
 * @class Button
 *
 */

import * as React from 'react';
import styled from 'styled-components';
import {Spinner} from "../spinner/spinner";
import Color from "../../helpers/color";

const color = new Color();

const sizes = {
  xsmall: '20px',
  small: '30px',
  medium: '40px',
  large: '51px',
};

type Props = {
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
  color?: string,
  disabled?: boolean,
  target?: string,
  type?: "button" | "reset" | "submit" | undefined,
  onClick?: any,
};

const Icon = styled.div`
  display: flex;
  align-items: center;

  svg {
    fill: ${props => color.getColorContrast(props.color)};
    font-size: 2em;
  }

  &:hover {
    fill: var(--color-white);
  }
`;

const IconOnly = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${props => color.getColor(props.color)};
  font-size: 2em;
  cursor: pointer;
`;

const IconLeft = styled.span`
  display: flex;
  margin-right: 8px;
`;

const IconRight = styled.span`
  display: flex;
  margin-left: 8px;
`;

const Label = styled.span`
  transition: opacity var(--transition-speed-normal) ease-in-out;
  opacity: 1;
  font-family: var(--font-primary);
  text-transform: capitalize;
  font-size: var(--font-size-xl);
`;

const OnlyIconButton = styled.button`
  background-color: transparent;
  border: none;
`;

const OnlyIconWithBorder = styled(OnlyIconButton)`
  border: 2px solid rgba(var(--color-primary-rgb), 0.25);
  padding: 5px 5px 5px 5px;
}

`;

const FlexStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const NormalButton = styled.button<any>`
  color: ${props => {
  if (props.clear && props.disabled) {
    return color.getColor('gray');
  }

  if (props.clear) {
    return color.getColor(props.color);
  }

  return color.getColorContrast(props.color);
}};

  background-color: ${props => {
  if (props.clear) {
    return 'transparent;';
  }

  if (props.disabled) {
    return color.getColor('gray');
  }

  return color.getColor(props.color);
}};

  border: 2px solid ${props => {
  if (props.disabled) {
    return color.getColor('gray');
  }

  return color.getColor(props.color);
}};

  cursor: ${props => props.disabled ? 'initial' : 'pointer'};
  border-radius: ${props => props.rounded ? '30px' : '3px'};
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);

  outline: none;
  padding: 0 var(--spacing-m);
  position: relative;
  text-align: center;
  width: ${props => (props.wide ? '100%' : 'auto')};
  text-decoration: none;
  letter-spacing: 0.8px;
  transition: all var(--transition-speed-normal) ease-in-out;
  line-height: ${props => sizes[props.size || "medium"]};

  &:hover {
    background-color: ${props => props.disabled ? '' : color.getColorShade(props.color)};
    border: 2px solid ${props => props.disabled ? color.getColor('gray') : color.getColorShade(props.color)};
    color: ${props => props.disabled ? '' : color.getColorContrast(props.color)};
  }
`;

const ButtonContainerStyled = styled.div`
  > *:nth-child(2) {
    margin-left: var(--spacing-m);
    vertical-align: middle;
  }
`;

export class Button extends React.Component<Props> {
  static defaultProps = {
    size: 'medium',
    color: 'primary',
  };

  render() {
    let buttonContent;
    const hasIcon = this.props.iconLeft || this.props.iconRight || this.props.iconOnly || this.props.iconButtonWithBorder;

    if (!hasIcon) {
      buttonContent = (
        <NormalButton
          disabled={this.props.loading || this.props.disabled}
          color={this.props.color}
          wide={this.props.wide}
          type={this.props.type}
          size={this.props.size}
          clear={this.props.clear}
          onClick={this.props.onClick}
          rounded={this.props.rounded}
          target={this.props.target}>
          <Label>{this.props.children}</Label>
        </NormalButton>
      );
    }

    if (hasIcon && this.props.iconLeft) {
      buttonContent = (
        <NormalButton
          disabled={this.props.loading || this.props.disabled}
          color={this.props.color}
          wide={this.props.wide}
          type={this.props.type}
          size={this.props.size}
          clear={this.props.clear}
          onClick={this.props.onClick}
          rounded={this.props.rounded}
          target={this.props.target}>
          <Icon>
            <IconLeft>{this.props.iconLeft}</IconLeft>
            <Label>{this.props.children}</Label>
          </Icon>
        </NormalButton>
      );
    }

    if (hasIcon && this.props.iconRight) {
      buttonContent = (
        <NormalButton
          disabled={this.props.loading || this.props.disabled}
          color={this.props.color}
          wide={this.props.wide}
          type={this.props.type}
          size={this.props.size}
          clear={this.props.clear}
          onClick={this.props.onClick}
          rounded={this.props.rounded}
          target={this.props.target}>
          <Icon>
            <Label>{this.props.children}</Label>
            <IconRight>{this.props.iconRight}</IconRight>
          </Icon>
        </NormalButton>
      );
    }

    if (hasIcon && this.props.iconOnly) {
      buttonContent = (
        <OnlyIconButton>
          <IconOnly>{this.props.iconOnly}</IconOnly>
        </OnlyIconButton>
      );
    }

    if (hasIcon && this.props.iconButtonWithBorder) {
      buttonContent = (
        <OnlyIconWithBorder>
          <FlexStyled>
            <IconOnly>{this.props.iconButtonWithBorder}</IconOnly>
          </FlexStyled>
        </OnlyIconWithBorder>
      );
    }

    const spinnerContent = (
      <Spinner color={color.getColor('primary')}/>
    );

    return (
      <ButtonContainerStyled {...this.props}
                             onClick={this.props.onClick}>
        {buttonContent}
        {this.props.loading && spinnerContent}
      </ButtonContainerStyled>

    );
  }
}
