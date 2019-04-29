/**
 * @class Button
 *
 */

import * as React from 'react';
import styled from 'styled-components';
import {Spinner} from "../spinner/spinner";
import Color from "../../helpers/color";

const colorHelper = new Color();

const sizes = {
  xsmall: '15px',
  small: '25px',
  medium: '35px',
  large: '45px',
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
  outlined?: boolean,
  clear?: boolean,
  color?: string,
  disabled?: boolean,
  target?: string,
  type?: "button" | "reset" | "submit" | undefined,
  onClick?: any,
};

const Icon = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;

  svg {
    fill: ${props => colorHelper.getColorContrast(props.color)};
    font-size: var(--icon-size-m);
  }

  &:hover {
    fill: var(--color-white);
  }
`;

const IconOnlyStyled = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--icon-size-m);
  cursor: pointer;
  fill: ${props => colorHelper.getColor(props.color)};
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
`;

const OnlyIconButtonStyled = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
`;

const OnlyIconWithBorder = styled(OnlyIconButtonStyled)`
  border: 2px solid rgba(var(--color-primary-rgb), 0.25);
  padding: var(--spacing-xs);
`;

const FlexStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const NormalButton = styled.button<any>`
  font-size: var(--font-size-m);
  color: ${props => {
  if (props.outlined && props.disabled) {
    return colorHelper.getColor('gray');
  }

  if (props.outlined || props.clear) {
    return colorHelper.getColor(props.color);
  }

  return colorHelper.getColorContrast(props.color);
}};

  background-color: ${props => {
  if (props.outlined || props.clear) {
    return 'rgba(0,0,0,0)';
  }

  if (props.disabled) {
    return colorHelper.getColor('gray');
  }

  return colorHelper.getColor(props.color);
}};
  
  border: 2px solid ${props => {
  if (props.disabled) {
    return colorHelper.getColor('gray');
  }

  if (props.clear) {
    return 'rgba(0,0,0,0)';
  }

  return colorHelper.getColor(props.color);
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
    background-color: ${props => {
  if (props.disabled || props.clear) {
    return '';
  }

  return colorHelper.getColorShade(props.color);
}};
    border: 2px solid ${props => {
  if (props.disabled) {
    return colorHelper.getColor('gray');
  }

  if (props.clear) {
    return 'rgba(0,0,0,0)';
  }

  return colorHelper.getColorShade(props.color);
}};
    
    
    color: ${props => {
  if (props.disabled) {
    return '';
  }

  if (props.clear) {
    return colorHelper.getColorShade(props.color);
  }

  return colorHelper.getColorContrast(props.color);
}};
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
          outlined={this.props.outlined}
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
          outlined={this.props.outlined}
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
          outlined={this.props.outlined}
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
        <OnlyIconButtonStyled {...this.props}>
          <IconOnlyStyled color={this.props.color}>{this.props.iconOnly}</IconOnlyStyled>
        </OnlyIconButtonStyled>
      );
    }

    if (hasIcon && this.props.iconButtonWithBorder) {
      buttonContent = (
        <OnlyIconWithBorder>
          <FlexStyled>
            <IconOnlyStyled>{this.props.iconButtonWithBorder}</IconOnlyStyled>
          </FlexStyled>
        </OnlyIconWithBorder>
      );
    }

    const spinnerContent = (
      <Spinner color={colorHelper.getColor('primary')}/>
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
