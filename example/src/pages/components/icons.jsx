import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { IconSettings, IconSavings, IconPreferences, IconWater, IconWaterBattery } from 'june-design-system';

export default class IconPage extends React.Component {

  render() {
    return (
      <Page>
        <div>
          <ReactSpecimen>
            <IconPreferences></IconPreferences>
          </ReactSpecimen>
          <ReactSpecimen>
            <IconSavings></IconSavings>
          </ReactSpecimen>
          <ReactSpecimen>
            <IconSettings></IconSettings>
          </ReactSpecimen>
          <ReactSpecimen>
            <IconWater></IconWater>
          </ReactSpecimen>
          <ReactSpecimen>
            <IconWaterBattery></IconWaterBattery>
          </ReactSpecimen>
        </div>
      </Page>

    )
  }
}
