import styled from "styled-components";
import * as React from "react";
import {loadStyleVariables} from "../..";

const styleVariables = loadStyleVariables();

const StyledContainer = styled.div`
  max-width: ${styleVariables.screenXs};
  margin: 0 auto;
  padding: 5px 20px;
`;

export class Container extends React.Component {
  render() {
    return (
      <StyledContainer className={"container"}>
        {this.props.children}
      </StyledContainer>
    )
  }

}
