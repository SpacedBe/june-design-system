/**
 * @class FormikSlottedInput
 */

import React, {Fragment} from 'react';
import styled from 'styled-components';
import {State} from "react-autocomplete";
import Color from "../../helpers/color";
import {connect, FieldProps, getIn} from "formik";

type Props = FieldProps & {
  ['serverErrors']: string;

  numberOfSlots: number;
  autoFocus?: boolean;
  error?: boolean;
};

const colorHelper = new Color();

const SlottedInputStyled = styled.input.attrs({
  maxLength: 1,
  autocorrect: 'off',
  autocapitalize: 'off',
  autocomplete: 'off',
  spellcheck: false
})<{ ref?: any, error?: boolean }>`
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

const ErrorMessageStyled = styled.div`
  font-size: var(--font-size-s);
  color: var(--color-error);
  font-weight: var(--font-weight-bold);
  margin-top: var(--spacing-xs);
`;

const WrapperStyled = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
`;

class FormikSlottedInput extends React.Component<Props, State> {
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

    if (this.inputRefs[i].current.value && !isLastInput) {
      this.inputRefs[i + 1].current.select();
    }

    let value = '';

    this.inputRefs.forEach((input) => {
      value = `${value}${input.current.value}`;
    });

    this.props.form.setFieldValue(this.props.field.name, value);
  }

  onBlur() {
    this.props.form.setFieldTouched(this.props.field.name);
  }

  render() {
    this.slots = [];
    this.inputRefs = [];

    const name = this.props.field.name;
    const fieldError = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const formError = touched ? (this.props.serverErrors && this.props.serverErrors[name]) || fieldError : null;

    for (let i = 0; i < this.props.numberOfSlots; i++) {
      let inputRef = React.createRef();

      this.slots.push(<SlottedInputStyled
        key={i}
        ref={inputRef}
        name={'slot' + i}
        id={'slot' + i}
        autoFocus={this.props.autoFocus ? (i === 0) : false}
        onChange={this.onChange.bind(this, i)}
        onBlur={this.onBlur.bind(this)}
        error={!!formError}/>);

      this.inputRefs.push(inputRef);
    }

    return (
      <Fragment>
        <WrapperStyled>
        {this.slots}
        </WrapperStyled>
        {formError && <ErrorMessageStyled>{formError}</ErrorMessageStyled>}
      </Fragment>
    );
  }
}

export default connect(FormikSlottedInput);
