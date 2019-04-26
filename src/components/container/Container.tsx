import styled from "styled-components";
import * as React from "react";

const StyledContainer = styled.div`
  width: 100%;
  max-width: var(--screen-xs);
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
