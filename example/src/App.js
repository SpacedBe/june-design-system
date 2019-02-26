import React, {Component} from 'react';
import { Catalog, pageLoader} from 'catalog';


import {
  Button,
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
                component: pageLoader(('./pages/design/icons.md')),
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
                component: pageLoader(() => import('./pages/components/button')),
                imports: {
                  Button,
                  IconSettings,
                },
              },
            ]
          },
        ]}
      />
    )
  }
}
