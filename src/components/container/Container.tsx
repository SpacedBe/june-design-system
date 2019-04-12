import styled from "styled-components";
import * as React from "react";
import {loadStyleVariables} from "../../scripts/loadStyleVariables";

const styleVariables = loadStyleVariables();

const StyledContainer = styled.div`
  max-width: ${styleVariables.screenXs};
  margin: 0 auto;
  padding: var(--spacing-m);
`;

export class Container extends React.Component {
  render() {
    return (
      <StyledContainer {...this.props}>
        {this.props.children}
      </StyledContainer>
    )
  }

}
