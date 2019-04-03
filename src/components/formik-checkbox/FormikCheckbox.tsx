/**
 * @class FormikCheckbox
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
  name: string,
  label: string,
  validationMessage: string;
  checked: boolean;
  placeholderText: string;
};

const styleVariables = loadStyleVariables();

const Input = styled.input`
  opacity: 0;
  z-index: ${styleVariables.ziCheckbox};
  position: absolute;
  cursor: pointer;
  width: 15px;
  height: 15px;

  &:checked ~ span{
    opacity: 1;
  }
`;

const Span = styled.span`
  display: inline-block;
  margin: 2.3px;
  width: 10px;
  height: 10px;
  opacity:0;
  border-radius: 15%;
  position: relative;
  background: ${styleVariables.colorGreen};
`;

const InputDiv = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

const Checkbox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 15%;
  top: 0px;
  left: 0px;
  position: absolute;
  content: "";
  display: inline-block;
  visibility: visible;
  background-color : ${styleVariables.colorWhite};
  border: 2px solid ${styleVariables.colorGreen};
`;

const Label = styled.label`
  margin-left: 35px;
  position: relative;
  font-family: ${styleVariables.fontSecondary};
  font-size: ${styleVariables.fontSizeM};
`;

export class FormikCheckbox extends React.Component<Props> {
  render() {
    return (
      <InputDiv>
        <Checkbox>
          <Input
            {...this.props.field}
            type="checkbox"
            name={this.props.name}
            disabled={this.props.disabled}
          />
          <Span></Span>
        </Checkbox>
          <Label>{this.props.label}</Label>
      </InputDiv>
    );
  }
}
