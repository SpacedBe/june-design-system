/**
 * @class FormikCheckbox
 */

import * as React from 'react';
import styled from "styled-components";
import { loadStyleVariables } from "../../scripts/loadStyleVariables";
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

const styleVariables = loadStyleVariables();

const Input = styled.input`
  opacity: 0;
  z-index: ${styleVariables.ziCheckbox};
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;
  &:checked ~ span{
    opacity: 1;
  }
`;

const Span = styled.span<{ error?: boolean; }>`
  display: inline-block;
  margin: 3px;
  width: 15px;
  height: 15px;
  opacity:0;
  position: relative;
  background-color: ${props => props.error ? `${styleVariables.colorRed}` : `${styleVariables.colorGreen}`};
`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

const Checkbox = styled.div<{ error?: boolean;}>`
  width: 21px;
  height: 21px;
  border-radius: 15%;
  top: 0px;
  left: 0px;
  display: inline-block;
  visibility: visible;
  background-color: ${styleVariables.colorWhite};
  border: ${props => props.error ? `2px solid ${styleVariables.colorRed}` : `2px solid ${styleVariables.colorGreen}`};
`;

const Label = styled.label<{ error?: boolean; }>`
  margin-left: var(--spacing-m);
  position: relative;
  font-family: ${styleVariables.fontSecondary};
  font-size: ${styleVariables.fontSizeM};
  color: ${props => props.error ? `${styleVariables.colorRed}` : `${styleVariables.colorBlack}`};
  text-align: left;
`;

export class FormikCheckbox extends React.Component<Props> {
  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = (this.props.serverErrors && this.props.serverErrors[name]) || error;

    return (
      <div>
        <InputDiv>
          <Checkbox
            error={!!errors}
          >
            <Input
              {...this.props.field}
              type="checkbox"
            />
            <Span error={!!errors} />
          </Checkbox>
          <Label error={!!errors}>{label}</Label>
        </InputDiv>
        {
          touched && errors && <div>{errors}</div>
        }
      </div>
    );
  }
}
