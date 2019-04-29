/**
 * @class Counter
 */
import * as React from 'react';
import styled from 'styled-components';
import {Button} from "../button/Button";
import {IconAdd, IconRemove} from "../../icons";

type Props = {
  className?: string;
  id?: string,
  onClickUp: any;
  onClickDown: any;
}

const CounterDiv = styled.div<{ onClick?: void }>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10%;
`;

export class Counter extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  onClickUp(e: any) {
    if (this.props.onClickUp) {
      this.props.onClickUp(e.target.value);
    }
  }

  onClickDown(e: any) {
    if (this.props.onClickDown) {
      this.props.onClickDown(e.target.value);
    }
  }

  render() {
    const {id, className} = this.props;

    return (
      <CounterDiv id={id} className={className}>
        <Button
          type='button'
          iconButtonWithBorder={<IconRemove/>}
          onClick={(e: any) => this.onClickDown(e)}
        />
        <Button
          type='button'
          iconButtonWithBorder={<IconAdd/>}
          onClick={(e: any) => this.onClickUp(e)}
        />
      </CounterDiv>
    );
  }
}
