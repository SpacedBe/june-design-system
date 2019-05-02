/**
 * @class FormGroup
 *
 */

import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  style?: any;
}

const FormGroupStyled = styled.div`
  margin-bottom: var(--spacing-m);
`;

export class FormGroup extends React.Component<Props, {}> {
  render(): JSX.Element {
    return (
      <FormGroupStyled {...this.props}>
        {this.props.children}
      </FormGroupStyled>
    );
  }
}
