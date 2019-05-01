/**
 * @class Counter
 */
import React from 'react';
import styled from 'styled-components';
import {IconAdd, IconRemove} from "../../icons";

type Props = {
  id?: string,
  onClickUp?: (arg?: any) => void;
  onClickDown?: (arg?: any) => void;
  className?: string;
}

const CountButton = styled.button`
  background-color: var(--color-white);
  border: 1px solid rgba(var(--color-primary-rgb), 0.25);
  padding: var(--spacing-xs);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;
  
  &:first-of-type {
    border-right: none;
  }
  
  svg {
    fill: var(--color-primary);
    font-size: 1.5em;
  } 
 
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
    const {id} = this.props;

    return (
      <div id={id} className={this.props.className}>
        <CountButton type='button' onClick={(e: any) => this.onClickDown(e)}>
          <IconRemove/>
        </CountButton>
        <CountButton type='button' onClick={(e: any) => this.onClickUp(e)}>
          <IconAdd/>
        </CountButton>
      </div>
    );
  }
}
