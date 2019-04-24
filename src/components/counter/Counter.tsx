/**
 * @class Counter
 */
import * as React from 'react';
import styled from 'styled-components';
import { Button } from "../button/Button";
import { IconAdd, IconRemove } from "../../icons";

type Props = {
  onClick?: any,
  clicked?: any,
  className?: string;
  id?: string,
  iconOnlyWithBorder?: any,
  changeUpClicked: any;
  changeDownClicked: any;
}

const CounterDiv = styled.div<{ onClick?: void }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10%;
`;

const SpanStyled = styled.span`
  padding-right: var(--spacing-s);
  font-size: var(--font-size-l);
`;

export class Counter extends React.Component<Props>{
  constructor(props: any){
    super(props);
    this.handleCountUp = this.handleCountUp.bind(this);
    this.handleCountDown = this.handleCountDown.bind(this);
  }

  handleCountUp(e: any){
    this.props.changeUpClicked(e.target.value);
  }
  handleCountDown(e: any) {
    this.props.changeDownClicked(e.target.value);
  }
  render(){
    return (
      <CounterDiv {...this.props} onClick={this.props.onClick}>
        <SpanStyled>{this.props.clicked}</SpanStyled>
        <Button
          iconButtonWithBorder={<IconRemove />}
          onClick={this.handleCountDown}
        />
        <Button
          iconButtonWithBorder={<IconAdd />}
          onClick={this.handleCountUp}
        />
      </CounterDiv>
    );
  }
}
