import React from 'react';
import { Page } from 'catalog';
import { Header } from 'june-design-system';

export default class FixedHeaderPage extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <Page>
        <Header>
        </Header>
      </Page>
    )
  }
}
