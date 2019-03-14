/**
 * @class Autocomplete
 *
 */

import * as React from 'react';
import styled from 'styled-components';
import { loadStyleVariables } from "../../scripts/loadStyleVariables";

const styleVariables = loadStyleVariables();

type Props = {
  value?: string,
  options?: any,
  label?: string,
  onChange?: any,
  id?: string,
  option?: string,
  item?: any,
  optionValue?: any,
}

const Select = styled.select<{
  value?: string;
  onChange?: void;
  options?: any;
  id?: string;
  option?: string;
  item?: any;
}>`
  border: ${`2px solid ${styleVariables.grayLight}`};
  color: ${`${styleVariables.grayLight}`};
  padding: 10px 10px 10px 10px;
  border-radius: 2.5px;
  background: ${styleVariables.colorWhite};
  opacity: ${props => (props.disabled ? "0.5" : "1")};
  outline: none;
  display: flex;
  height: 40px;
  width: 100%;
`;
export class Autocomplete extends React.Component<Props> {
  render(){
    return (
      <Select onChange={this.props.onChange} value={this.props.value} >

      </Select>
    );
  }
}
