/**
 * @class FormikSelect
 */

import * as React from "react";
import styled from "styled-components";
import { loadStyleVariables } from "../../scripts/loadStyleVariables";

interface Option {
  option: string,
}


type Props = {
  userInput?: string,
  options: Option[],
  label?: string,
  optionSet?: any,
  field:{
    name: string;
  }
}
const styleVariables = loadStyleVariables();


const Select = styled.select`
  border: ${`2px solid ${styleVariables.grayLight}`};
  padding: 10px 10px 10px 10px;
  border-radius: 2.5px;
  background: ${styleVariables.colorWhite};
  outline: none;
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;

const Option = styled.option`
  color: ${`${styleVariables.gray}`};
`;
export class FormikSelect extends React.Component<Props>{
  render(){

    const hasOption = this.props.optionSet;
    if (hasOption && this.props.optionSet){}
    return (
      <div>
        <label>{this.props.label}</label>
        <Select>
          {this.props.options.map(item => (
            <Option value={item.option}>
              {item.option}
            </Option>
          ))}
        </Select>
      </div>
    );
  }
}
