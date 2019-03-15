/**
 * @class FormiFormikFormkInput
 */

import * as React from "react";
import styled from "styled-components";
import { loadStyleVariables } from "../../scripts/loadStyleVariables";

const styleVariables = loadStyleVariables();

const Container = styled.div`
  background-color: ${styleVariables.green};
`
export class FormikForm extends React.Component{
  render(){
    return(
      <Container>

      </Container>
    )
  }
}
