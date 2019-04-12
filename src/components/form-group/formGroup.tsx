/**
 * @class FormGroup
 *
 */

import * as React from 'react';
import styled from 'styled-components';

import {loadStyleVariables} from "../../scripts/loadStyleVariables";

const styleVariables = loadStyleVariables();

type Props = {};

const FormGroupStyled = styled.div`
  margin-bottom: ${styleVariables.spacingM};
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
