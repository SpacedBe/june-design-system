/**
 * @class FormikCheckbox
 */

import * as React from 'react';
import styled from "styled-components";
import {getIn} from 'formik';

type Props = {
  field: {
    name: string;
  };
  form: {
    ['errors']: string;
    ['touched']: boolean;
  };
  ['serverErrors']: string;
  label: string,
  validationMessage: string;
  checked: boolean;
  placeholderText: string;
  error: boolean,
  focussed: boolean,
  required?: boolean,
};

const WrapperStyled = styled.div`
  text-align: left;
`;

const Input = styled.input`
  opacity: 0;
  z-index: var(--zi-200);
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;
  &:checked ~ span{
    opacity: 1;
  }
`;

const Span = styled.span<{ error?: boolean }>`
  display: inline-block;
  margin: 3px;
  width: 15px;
  height: 15px;
  opacity: 0;
  position: relative;
  background-color: ${props =>
    props.error
      ? `var(--color-error)`
      : `var(--color-primary)`};
`;

const CheckBoxWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  text-align: left;
  margin-bottom: var(--spacing-s);
`;

const Checkbox = styled.div<{ error?: boolean }>`
  width: 21px;
  height: 21px;
  border-radius: 15%;
  top: 0px;
  left: 0px;
  display: inline-block;
  visibility: visible;
  background-color: var(--color-white);
  border: ${props =>
    props.error
      ? `2px solid var(--color-error)`
      : `2px solid var(--color-primary)`};
`;

const ErrorMessageStyled = styled.span`
  font-size: var(--font-size-s);
  color: var(--color-error);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-xs);
`;

const Label = styled.label<{ error?: boolean }>`
  margin-left: var(--spacing-m);
  position: relative;
  font-family: var(--font-secondary);
  font-size: var(--font-size-m);
  color: ${props =>
    props.error
      ? `var(--color-error)`
      : `var(--color-dark)`};
  text-align: left;
`;

export class FormikCheckbox extends React.Component<Props> {
  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const errors = (this.props.serverErrors && this.props.serverErrors[name]) || error;

    return (
      <WrapperStyled>
        <CheckBoxWrapperStyled>
          <Checkbox error={!!errors}>
            <Input
              {...this.props.field}
              type="checkbox"/>
            <Span error={!!errors}/>
          </Checkbox>
          <Label dangerouslySetInnerHTML={{__html: label}} error={!!errors}></Label>
        </CheckBoxWrapperStyled>
        {errors && <ErrorMessageStyled>{errors}</ErrorMessageStyled>}
      </WrapperStyled>
    );
  }
}
