import styled from "styled-components";
import * as React from "react";
import {loadStyleVariables} from "../..";

const styleVariables = loadStyleVariables();

const StyledContainer = styled.div<{hasPadding?: boolean}>`
  max-width: ${styleVariables.screenXs};
  margin: 0 auto;
`;

export class Container extends React.Component {
  render() {
    return (
      <StyledContainer>
        {this.props.children}
      </StyledContainer>
    )
  }

}
