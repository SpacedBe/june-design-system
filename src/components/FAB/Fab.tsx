import * as React from "react";
import {loadStyleVariables} from "../..";
import styled from "styled-components";

type Props = {
  size?: 'small' | 'medium' | 'large';
  inverted?: boolean;
};
const styleVariables = loadStyleVariables();

const sizes = {
  small: '34px',
  medium: '54px',
  large: '96px',
};

const Host = styled.div<Props>`
  width: ${props => sizes[props.size || 'medium']}; // TS does not recognize defaultProps
  height: ${props => sizes[props.size || 'medium']};
  background-color: ${props => props.inverted ? styleVariables.colorPrimary : 'transparent'};
  color: ${props => props.inverted ? styleVariables.colorWhite : styleVariables.colorPrimary};
  border: 2px solid ${styleVariables.colorPrimary};
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  outline: 0;
  position: relative;
  text-align: center;
  text-decoration: none;
  letter-spacing: 0.8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: all .2s;
  
  svg {
    fill: ${props => props.inverted ? styleVariables.colorWhite : styleVariables.colorPrimary};
  }

  &:hover {
    background-color: ${props => props.inverted ? styleVariables.colorWhite : styleVariables.colorPrimary};
    color: ${props => props.inverted ? styleVariables.colorPrimary : styleVariables.colorWhite};
  
    svg {
      fill: ${props => props.inverted ? styleVariables.colorPrimary : styleVariables.colorWhite};
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