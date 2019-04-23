/**
 * @class FormGroup
 *
 */

import * as React from 'react';
import styled from 'styled-components';

type Props = {};

const FormGroupStyled = styled.div`
  margin-bottom: var(--spacing-m);
`;

export class FormGroup extends React.Component<Props> {
  render() {
    return (
      <FormGroupStyled>
        {this.props.children}
      </FormGroupStyled>
    );
  }
}
