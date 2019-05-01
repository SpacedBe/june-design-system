import * as React from "react";
import styled from "styled-components";
import Color from "../../helpers/color";

const colorHelper = new Color();

export class FormError extends React.Component {
  render() {
    const ErrorStyled = styled.div`
      color: ${colorHelper.getColor('error')};
      font-weight: var(--font-weight-bold);
    `;

    return (
      <ErrorStyled>
        {this.props.children}
      </ErrorStyled>
    );
  }
}
