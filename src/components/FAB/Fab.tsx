import * as React from "react";
import {loadStyleVariables} from "../..";
import styled from "styled-components";

type Props = {};
const styleVariables = loadStyleVariables();

const Host = styled.div`
  width: 54px;
  height: 54px;
  background-color: transparent;
  color: ${styleVariables.colorPrimary};
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
    fill: ${styleVariables.colorPrimary};;
  }

  &:hover {
    background-color: ${styleVariables.colorPrimary};
    color: ${styleVariables.colorWhite};
  
    svg {
      fill: white;
    }
  }
`;

export class Fab extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Host>
        {this.props.children}
      </Host>
    );
  }

}
