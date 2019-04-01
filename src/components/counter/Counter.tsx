/**
 * @class Counter
 */
import * as React from 'react';
import styled from 'styled-components';
import { loadStyleVariables } from "../../scripts/loadStyleVariables";

const styleVariables = loadStyleVariables();

type Props = {
  onClick?: any,
  clicked?: any,
}

const CounterDiv = styled.div<{ onClick?: void }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Span = styled.div`
  color: ${styleVariables.colorPrimary};
`

export class Counter extends React.Component<Props>{
  render(){
    return(
      <CounterDiv {...this.props} onClick={this.props.onClick}>
        <Span>{this.props.clicked}</Span>
        {this.props.children}
      </CounterDiv>
    )
  }
}
