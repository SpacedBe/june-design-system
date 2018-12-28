import React, { Component } from 'react';
import {Catalog, pageLoader} from 'catalog';
import {Button} from 'june-design-system';

export default class App extends Component {
  render () {
    return (
      <Catalog
        title='June Design System'
        pages={[
          {
            path: '/',
            title: 'Introduction',
            content: pageLoader(('./pages/intro.md')),
          },
          {
            title: 'Components',
            pages: [
              {
                path: 'buttons',
                title: 'Buttons',
                imports: {Button: Button},
                component: pageLoader(('./pages/components/button.md')),
              },
            ]
          },
        ]}
      />
    )
  }
}
