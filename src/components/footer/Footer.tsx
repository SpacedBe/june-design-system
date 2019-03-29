/**
 * @class Footer
 */

import * as React from 'react';
import styled from 'styled-components';
import { loadStyleVariables } from "../../scripts/loadStyleVariables";

const styleVariables = loadStyleVariables();

const FooterDiv = styled.div`
  position: fixed;
  bottom: 0px;
  height: 100px;
  left: 0px;
  right: 0px;
  overflow: hidden;
  background-color: ${styleVariables.colorWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -3px 10px ${styleVariables.colorGrayLighter};
`;

export class Footer extends React.Component{
  render(){
    return(
      <FooterDiv>
        {this.props.children}
      </FooterDiv>
    )
  }
}
