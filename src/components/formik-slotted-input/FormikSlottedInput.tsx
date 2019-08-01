/**
 * @class FormikSlottedInput
 */

import React from 'react';
import styled from 'styled-components';
import {State} from "react-autocomplete";
import Color from "../../helpers/color";

type Props = {
  numberOfSlots: number;
  autoFocus?: boolean;
  error?: boolean;
};

const colorHelper = new Color();

const SlottedInputStyled = styled.input.attrs({maxLength: 1, autocorrect: 'off', autocapitalize: 'off', autocomplete: 'off', spellcheck: false})<{ ref?: any, error?: boolean }>`
  font-size: 1rem;
  text-transform: uppercase;
  text-align: center;
  font-weight: var(--font-weight-bold);
  color: ${props => {
    if (props.error) {
      return colorHelper.getColor('error');
    } else {
      return 'var(--color-gray-dark)';
    }
  }};
  width: 2rem;
  height: 2.5rem;
  border: 2px solid ${props => {
    if (props.error) {
      return colorHelper.getColor('error');
    } else {
      return 'var(--color-gray-dark)';
    }
  }};
  border-radius: 3px;
  margin: var(--spacing-xs) var(--spacing-xxs);
  outline: none;
`;

export class FormikSlottedInput extends React.Component<Props, State> {
  public slots: any[];
  public inputRefs: any[];

  constructor(props: any) {
    super(props);

  }

  onChange(i: number, e: any) {
    const inputValue = this.inputRefs[i].current.value;
    const isLastInput = i === this.slots.length - 1;

    if (inputValue.length > 0) {
      e.preventDefault();
      this.inputRefs[i].current.value = this.inputRefs[i].current.value.substr(-1, 1);
    }

    if (!isLastInput) {
      this.inputRefs[i + 1].current.select();
    }
  }

  createSlots() {
    for (let i = 0; i < this.props.numberOfSlots; i++) {
      let inputRef = React.createRef();
      this.slots.push(<SlottedInputStyled key={i}
                                          ref={inputRef}
                                          name={'slot' + i}
                                          id={'slot' + i}
                                          autoFocus={this.props.autoFocus ? (i === 0) : false}
                                          onChange={this.onChange.bind(this, i)}
                                          error={this.props.error}/>);
      this.inputRefs.push(inputRef);
    }

    return this.slots;
  }

  render() {
    this.slots = [];
    this.inputRefs = [];
    this.createSlots();

    return (
      <div>
        {this.slots}
      </div>
    );
  }
}
