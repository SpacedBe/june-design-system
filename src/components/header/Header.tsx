/**
 * @class Header
 */
import * as React from 'react';
import styled from "styled-components";

const HeaderDiv = styled.div`
  overflow: hidden;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0.5px 1px rgba(var(--color-primary-rgb), 0.25);
`;

export class Header extends React.Component {
  render(){
    return(
      <HeaderDiv {...this.props}>
        {this.props.children}
      </HeaderDiv>
    )
  }
}
