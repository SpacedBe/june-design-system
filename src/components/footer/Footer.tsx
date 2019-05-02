/**
 * @class Footer
 */
import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
  overflow: hidden;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export class Footer extends React.Component {
  render() {
    return (
      <FooterStyled {...this.props}>
        {this.props.children}
      </FooterStyled>
    );
  }
}
