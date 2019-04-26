/**
 * @class Footer
 */
import * as React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
  padding: var(--spacing-l);
  overflow: hidden;
  background-color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px -3px 10px var(--color-gray-lighter);
  width: 100%;
`;

export class Footer extends React.Component {
  render() {
    return (
      <FooterDiv {...this.props}>
        {this.props.children}
      </FooterDiv>
    );
  }
}
