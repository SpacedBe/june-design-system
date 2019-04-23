import * as React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  border-top: 1px solid rgba(var(--color-primary-rgb), 0.25);
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Content = styled.span`
  padding: 5px;
  color: var(--color-primary);
  font-size: var(--font-size-m);
  font-family: var(--font-secondary);
`;

export class Separator extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Flex {...this.props}>
        <Line/>
        <Content>
          {this.props.children}
        </Content>
        <Line/>
      </Flex>
    );
  }
}
