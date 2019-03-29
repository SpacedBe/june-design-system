/**
 * @class Header
 */
import * as React from 'react';
import styled from "styled-components";
import { loadStyleVariables } from "../../scripts/loadStyleVariables";

const styleVariables = loadStyleVariables();

const HeaderDiv = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 100px;
  overflow: hidden;
  background-color: ${styleVariables.colorWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0.5px 1px ${styleVariables.greenLime};
`;

export class Header extends React.Component {
  render() {
    return (
      <HeaderDiv>
        {this.props.children}
      </HeaderDiv>
    )
  }
}
