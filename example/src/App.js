import React, {Component} from 'react';
import {Catalog, pageLoader} from 'catalog';

import {
  Button,
  Input,
  IconPreferences,
  IconSavings,
  IconSettings,
  IconWater,
  IconWaterBattery
} from 'june-design-system';

export default class App extends Component {
  render() {
    return (
      <Catalog
        title='June Design System'
        styles={["./styles/main.css"]}
        pages={[
          {
            path: '/',
            title: 'Introduction',
            content: pageLoader(('./pages/intro.md')),
          },
          {
            title: 'Design',
            pages: [
              {
                path: 'typography',
                title: 'Typography',
                content: pageLoader(('./pages/design/typography.md')),
              },
              {
                path: 'icons',
                title: 'Icons',
                content: pageLoader(('./pages/design/icons.md')),
                imports: {
                  IconPreferences,
                  IconSavings,
                  IconSettings,
                  IconWater,
                  IconWaterBattery,
                }
              }
            ]
          },
          {
            title: 'Components',
            pages: [
              {
                path: 'buttons',
                title: 'Buttons',
                component: pageLoader(('./pages/components/button.md')),
                imports: {
                  Button,
                  IconSettings,
                },
              },
              {
                path: 'inputs',
                title: 'Inputs',
                component: pageLoader(('./pages/components/input.md')),
                imports: {
                  Input
                },
              },
            ]
          },
        ]}
      />
    )
  }
}
