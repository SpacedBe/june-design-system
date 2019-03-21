/**
 * @class FormikRadiobutton
 */

import * as React from 'react';
import styled from "styled-components";
import { loadStyleVariables } from "../../scripts/loadStyleVariables";

type Props = {
  field: {
    name: string;
  };
  form: {
    ['errors']: string;
    ['touched']: boolean;
  };
  disabled: boolean;
  name:string,
  label: string,
  validationMessage: string;
  checked: boolean;
  placeholderText: string;
};

const styleVariables = loadStyleVariables();

const Input = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  z-index: 200;
  position: absolute;
  cursor: pointer;
  width: 20px;
  height: 20px;

  &:checked ~ span {
    opacity: 1;
  }
`;

const Span = styled.span`
  display: inline-block;
  margin: 2.5px;
  width: 15px;
  height: 15px;
  opacity: 0;
  border-radius: 30px;
  position: relative;
  background: ${styleVariables.green};
`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

const Round = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 15px;
  top: 0px;
  left: 0px;
  position: absolute;
  content: "";
  display: inline-block;
  visibility: visible;
  background-color : ${styleVariables.colorWhite};
  border: 2px solid ${styleVariables.green};
`;

const Label = styled.label`
  margin-left: 35px;
`
export class FormikRadiobutton extends React.Component<Props> {
  render() {
    return (
      <InputDiv>
        <Round>
          <Input
            {...this.props.field}
            type="radio"
            name={this.props.name}
            disabled={this.props.disabled}
          />
          <Span></Span>
        </Round>
        <Label>{this.props.label}</Label>
      </InputDiv>
    );
  }
}
