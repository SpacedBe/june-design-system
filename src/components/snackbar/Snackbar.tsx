import * as React from "react";
import styled from "styled-components";
import Color from "../../helpers/color";

const colorHelper = new Color();

const WrapperStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const SnackbarStyled = styled.div`
  background-color: ${colorHelper.getColor('dark')};
  color: ${colorHelper.getColor('white')};
  font-size: var(--font-size-s);
  font-family: var(--font-secondary);
  min-height: 50px;
  padding: 0 var(--spacing-m);
  border-radius: var(--border-radius-s);
  box-shadow: var(--box-shadow-m);
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export class Snackbar extends React.Component {
  render() {
    return (
      <WrapperStyled>
        <SnackbarStyled>
          {this.props.children}
        </SnackbarStyled>
      </WrapperStyled>
    );
  }
}
