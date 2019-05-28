/**
 * @class Button
 *
 */

import React  from 'react';
import styled from 'styled-components';
import {Spinner} from "../spinner/Spinner";
import Color from "../../helpers/color";

const colorHelper = new Color();

const sizes = {
  xsmall: '15px',
  small: '25px',
  medium: '35px',
  large: '45px',
};

type Props = {
  class?: string,
  id?: string,
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
  color?: string,
  disabled?: boolean,
  target?: string,
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
  padding: 0px var(--spacing-m);
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

    buttonContent = (
      <NormalButton
        id={this.props.id}
        class={this.props.class}
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
      </ NormalButton>
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
