import React from 'react';
import styled from 'styled-components';

type Props = {
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
};

const sizes = {
  small: '34px',
  medium: '54px',
  large: '96px',
};

const Host = styled.div<Props>`
  width: ${props => sizes[props.size || 'medium']}; // TS does not recognize defaultProps
  height: ${props => sizes[props.size || 'medium']};
  background-color: ${props =>
    props.inverted
      ? `var(--color-primary)`
      : 'transparent'};
  color: ${props =>
    props.inverted
      ? `var(--color-white)`
      : `var(--color-primary)`};
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  font-size: var(--font-size-l);
  cursor: pointer;
  outline: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  svg {
    fill: ${props =>
      props.inverted
        ? `var(--color-white)`
        : `var(--color-primary)`};
  }

  &:hover {
    background-color: ${props =>
      props.inverted
        ? 'transparent'
        : `var(--color-primary)`};
    color: ${props =>
      props.inverted
        ? `var(--color-primary)`
        : `var(--color-white)`};

    svg {
      fill: ${props =>
        props.inverted
          ? `var(--color-primary)`
          : `var(--color-white)`};
    }
  }
`;

export class Fab extends React.Component<Props> {
  static defaultProps = {
    size: 'medium'
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Host size={this.props.size} inverted={this.props.inverted}>
        {this.props.children}
      </Host>
    );
  }

}
