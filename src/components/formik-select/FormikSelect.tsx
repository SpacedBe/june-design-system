/**
 * @class FormikSelect
 */

import * as React from "react";
import styled from "styled-components";
import {loadStyleVariables} from "../../scripts/loadStyleVariables";
import {getIn} from 'formik';

interface Option {
  label: string,
  value: string,
}

type Props = {
  field: {
    name: string;
  }
  form: {
    ['errors']: string;
    ['touched']: boolean;
  };

  ['serverErrors']: string;

  options: Option[],
  label?: string,
  error: boolean,
  disabled: boolean,
}
const styleVariables = loadStyleVariables();

const WrapperStyled = styled.div`
  text-align: left;
`;

const Select = styled.select<{
  error?: boolean;
  disabled?: boolean;
}>`
  border: ${props =>
  props.error
    ? `2px solid ${styleVariables.colorRed}`
    : `2px solid ${styleVariables.colorGrayLight}`};
  padding: 10px 10px 10px 10px;
  border-radius: 2.5px;
  background: ${styleVariables.colorWhite};
  outline: none;
  display: flex;
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;

const Label = styled.label<{
  error?: boolean;
  disabled?: boolean;
}>`
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  color: ${props =>
  props.error
    ? `${styleVariables.colorRed}`
    : `${styleVariables.colorGrayLight}`};
`;

const Option = styled.option`
  color: ${`${styleVariables.colorGray}`};
`;

export class FormikSelect extends React.Component<Props> {
  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = (this.props.serverErrors && this.props.serverErrors[name]) || error;

    return (
      <WrapperStyled>
        <Label
          disabled={this.props.disabled}
          error={!!errors}
          htmlFor={name}>
          {label}
        </Label>

        <Select
          {...this.props.field}
          disabled={this.props.disabled}
        >
          {this.props.options.map(item => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>
        {touched && errors && <div>{errors}</div>}
      </WrapperStyled>
    );
  }
}
