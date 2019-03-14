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
  validationMessage: string;
  label: string;
  checked: boolean;
  placeholderText: string;
};

const styleVariables = loadStyleVariables();

const Input = styled.input.attrs({ type: "radio" })`
  &:after {
    width: 13px;
    height: 13px;
    border-radius: 15px;
    top: -2px;
    left: -2px;
    position: relative;
    background-color: ${styleVariables.colorWhite};
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid ${styleVariables.colorWhite};
  }
  &:checked&:after {
    width: 13px;
    height: 13px;
    border-radius: 15px;
    top: -1px;
    left: -0.5px;
    position: relative;
    background-color: ${styleVariables.green};
    content: "";
    display: inline-block;
    visibility: visible;
    border: 2px solid ${styleVariables.green};
  }
`;

const InputDiv = styled.div`
  display: block;
  position: relative;
`;

const Round = styled.div`
  width: 21px;
  height: 21px;
  border-radius: 15px;
  top: 0px;
  left: -12px;
  position: relative;
  content: "";
  display: inline-block;
  visibility: visible;
  background-color : ${styleVariables.colorWhite};
  border: 2px solid ${styleVariables.green};
`;
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
        </Round>
        <label>{this.props.label}</label>
      </InputDiv>
    );
  }
}
