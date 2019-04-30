/**
 * @class Footer
 */
import * as React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
  overflow: hidden;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  @media only screen and (max-width: 768px) {
    box-shadow: 0px -3px 10px var(--color-gray-lighter);
    padding: var(--spacing-l);
  }
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
