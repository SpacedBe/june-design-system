import React from 'react';
import {Page} from 'catalog';
import {Spinner} from 'june-design-system';

export default class FabPage extends React.Component {
  render() {
    return (
      <Page>
        <Spinner/>
      </Page>
    );
  }
}
