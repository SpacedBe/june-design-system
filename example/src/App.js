import React, {Component} from 'react';
import {Catalog, pageLoader} from 'catalog';

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
        pages={[
          {
            path: '/',
            title: 'Introduction',
            content: pageLoader(('./pages/intro.md')),
          },
          {
            path: '/icons',
            title: 'Icons',
            content: pageLoader(('./pages/icons/index.md')),
            imports: {
              IconPreferences,
              IconSavings,
              IconSettings,
              IconWater,
              IconWaterBattery,
            }
          },
          {
            title: 'Components',
            pages: [
              {
                path: 'buttons',
                title: 'Buttons',
                imports: { Button: Button },
                component: pageLoader(('./pages/components/button.md')),
              },
            ]
          },
        ]}
      />
    )
  }
}
