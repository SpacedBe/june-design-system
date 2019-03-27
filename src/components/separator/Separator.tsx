import * as React from "react";
import styled from "styled-components";
import { loadStyleVariables } from "../..";

const styleVariables = loadStyleVariables();

const Line = styled.div`
  border-top: 1px solid ${styleVariables.colorPrimary};
  width: 100%;
  opacity: 0.3;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`

const Content = styled.span`
  padding: 5px;
  color: ${styleVariables.colorPrimary};
`

export class Separator extends React.Component{
  constructor(props: any){
    super(props);
  }

  render(){
    return (
      <Flex>
        <Line/>
        <Content>
          {this.props.children}
        </Content>
        <Line/>
      </Flex>
    );
  }
}