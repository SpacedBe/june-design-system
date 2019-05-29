/**
 * @class Button
 *
 */

import React from 'react';
import styled from 'styled-components';
import {Spinner} from "../spinner/Spinner";
import Color from "../../helpers/color";
import {withDynamicTag} from '../../helpers/DynamicTag';

const colorHelper = new Color();

const sizes = {
  xsmall: '15px',
  small: '25px',
  medium: '35px',
  large: '45px',
};

type Props = {
  tag?: string,
  className?: string,
  id?: string,
  href?: string,
  target?: string,
  label?: string | React.ReactNode,
  iconLeft?: any,
  iconRight?: any,
  iconOnly?: any,
  loading?: boolean,
  wide?: boolean,
  size?: 'xsmall' | 'small' | 'medium' | 'large',
  rounded?: boolean,
  outlined?: boolean,
  clear?: boolean,
  inverted?: boolean,
  color?: string,
  disabled?: boolean,
  type?: "button" | "reset" | "submit" | undefined,
  onClick?: (arg?: any) => any,
};

const Icon = styled.div<{ color?: string, clear?: boolean, outlined?: boolean, loading?: boolean }>`
  display: flex;
  align-items: center;
  visibility: ${props => props.loading ? 'hidden' : 'visible'};

  svg {
    fill: ${props => {
  if (props.clear || props.outlined) {
    return colorHelper.getColor(props.color);
  }
    
  return colorHelper.getColorContrast(props.color);
}};

    font-size: var(--icon-size-m);
  }

  &:hover {
    fill: var(--color-white);
  }
`;

const IconLeft = styled(Icon)`
  margin-right: var(--spacing-s);
`;

const IconRight = styled(Icon)`
  margin-left: var(--spacing-s);
`;

const IconOnlyStyled = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--icon-size-m);
  cursor: pointer;
  fill: ${props => colorHelper.getColor(props.color)};
`;

const Label = styled.div`
  transition: opacity var(--transition-speed-normal) ease-in-out;
  opacity: 1;
  font-family: var(--font-primary);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OnlyIconButtonStyled = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  padding: 0;
`;

const ButtonStyled = styled.button<{ outlined?: boolean, clear?: boolean, disabled?: boolean, inverted?: boolean, color: string, size: string, rounded?: boolean, wide?: boolean }>`
  display: inline-block;
  font-size: var(--font-size-m);
  color: ${props => {
  if (props.disabled && props.outlined) {
    return colorHelper.getColor('disabled');
  }

  if (props.disabled && props.inverted) {
    return colorHelper.getColor('disabled');
  }
  
  if (props.disabled && !props.clear) {
    return colorHelper.getColorContrast('disabled');
  }
  
  if (props.disabled) {
    return colorHelper.getColor('disabled');
  }    

  if (props.outlined && props.inverted || props.clear && props.inverted) {
    return colorHelper.getColorContrast(props.color);
  }

  if (props.outlined || props.clear) {
    return colorHelper.getColor(props.color);
  }

  if (props.inverted) {
    return colorHelper.getColor(props.color);
  }

  return colorHelper.getColorContrast(props.color);
}};

  background-color: ${props => {
  if (props.disabled && props.outlined) {
    return 'rgba(0,0,0,0)';
  }

  if (props.disabled && props.inverted) {
    return colorHelper.getColorContrast('disabled');
  }
  
  if (props.disabled && !props.clear) {
    return colorHelper.getColor('disabled');
  }
  
  if (props.inverted && props.outlined) {
    return 'rgba(0,0,0,0)';
  }

  if (props.outlined || props.clear) {
    return 'rgba(0,0,0,0)';
  }

  if (props.inverted) {
    return colorHelper.getColorContrast(props.color);
  }

  if (props.inverted) {
    return colorHelper.getColorContrast(props.color);
  }

  return colorHelper.getColor(props.color);
}};

  border: 2px solid ${props => {
  if (props.disabled && !props.clear) {
    return colorHelper.getColor('disabled');
  }

  if (props.inverted && props.outlined) {
    return colorHelper.getColorContrast(props.color);
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
  if (props.disabled && !props.clear) {
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
    tag: 'button',
    size: 'medium',
    color: 'primary',
  };

  render() {
    let buttonContent;

    const Tag = withDynamicTag(ButtonStyled);

    buttonContent = (
        <Tag
            tag={this.props.tag || Button.defaultProps.tag}
            id={this.props.id}
            className={this.props.className}
            href={this.props.href}
            target={this.props.target}
            disabled={this.props.loading || this.props.disabled}
            color={this.props.color || Button.defaultProps.color}
            wide={this.props.wide}
            type={this.props.type}
            size={this.props.size || Button.defaultProps.size}
            outlined={this.props.outlined}
            clear={this.props.clear}
            inverted={this.props.inverted}
            onClick={this.props.onClick}
            rounded={this.props.rounded}>
        <Label>
          {this.props.iconLeft ? <IconLeft
            clear={this.props.clear}
            outlined={this.props.outlined}
            loading={this.props.loading}>{this.props.iconLeft}</IconLeft> : ''}
          <span style={{visibility: this.props.loading ? 'hidden' : 'visible'}}>{this.props.children}</span>
          {this.props.iconRight ? <IconRight
            clear={this.props.clear}
            outlined={this.props.outlined}
            loading={this.props.loading}>{this.props.iconRight}</IconRight> : ''}
          {this.props.loading ? <Spinner style={{position: 'absolute'}} color={this.props.outlined || this.props.clear ? 'disabled' : 'white'}/> : ''}
        </ Label>
        </ Tag>
    );

    if (this.props.iconOnly) {
      buttonContent = (
        <OnlyIconButtonStyled {...this.props}>
          <IconOnlyStyled color={this.props.color}>{this.props.iconOnly}</IconOnlyStyled>
        </OnlyIconButtonStyled>
      );
    }

    return (
      <ButtonContainerStyled>
        {buttonContent}
      </ButtonContainerStyled>

    );
  }
}
