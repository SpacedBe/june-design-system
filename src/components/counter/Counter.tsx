/**
 * @class Counter
 */
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  onClick?: any,
  clicked?: any,
}

const CounterDiv = styled.div<{ onClick?: void }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export class Counter extends React.Component<Props>{
  render(){
    return(
      <CounterDiv {...this.props} onClick={this.props.onClick}>
        {this.props.children}
      </CounterDiv>
    )
  }
}
