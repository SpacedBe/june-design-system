import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {
  IconSettings,
  IconSavings,
  IconPreferences,
  IconWater,
  IconWaterBattery,
  IconCheck,
  IconPhone,
  IconChat,
  IconMail,
  IconElectricity,
  IconGas,
  IconCalender,
  IconQuestionmark,
  IconClose,
  IconJune,
  IconRemove,
  IconAdd,
} from 'june-design-system';
import {Flex} from 'reflexbox';

export default class IconPage extends React.Component {

  render() {
    return (
      <Page >
      ## Icons
      <Flex wrap column className={'icons'}>
        <Flex>
          <div>
            <ReactSpecimen>
              <IconPreferences className={'icon'}></IconPreferences>
            </ReactSpecimen>
            <p>Preferences</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconSavings className={'icon'}></IconSavings>
            </ReactSpecimen>
            <p>Savings</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconSettings className={'icon'}></IconSettings>
            </ReactSpecimen>
            <p>Settings</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconWater className={'icon'}></IconWater>
            </ReactSpecimen>
            <p>Water</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconWaterBattery className={'icon'}></IconWaterBattery>
            </ReactSpecimen>
            <p>Battery</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconCheck className={'icon'}></IconCheck>
            </ReactSpecimen>
            <p>Check</p>
          </div>
        </Flex>

        <Flex justify='space-between' order={2} wrap>
          <div>
            <ReactSpecimen>
              <IconMail className={'icon'}></IconMail>
            </ReactSpecimen>
            <p>Mail</p>
          </div>

          <div>
          <ReactSpecimen>
              <IconPhone className={'icon'}></IconPhone>
            </ReactSpecimen>
            <p>Phone</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconChat className={'icon'}></IconChat>
            </ReactSpecimen>
            <p>Chat</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconElectricity className={'icon'}></IconElectricity>
            </ReactSpecimen>
            <p>Electricity</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconGas className={'icon'}></IconGas>
            </ReactSpecimen>
            <p>Gas</p>
          </div>

            <div>
              <ReactSpecimen>
                <IconCalender className={'icon'}></IconCalender>
              </ReactSpecimen>
              <p>Calender</p>
            </div>
        </Flex>

        <Flex justify='space-between' order={2} wrap>
        <div>
          <ReactSpecimen>
            <IconQuestionmark className={'icon'}></IconQuestionmark>
          </ReactSpecimen>
          <p>Questionmark</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconClose className={'icon'}></IconClose>
            </ReactSpecimen>
            <p>Close</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconJune className={'icon'}></IconJune>
            </ReactSpecimen>
            <p>June</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconRemove className={'icon'}></IconRemove>
            </ReactSpecimen>
            <p>Remove</p>
          </div>

          <div>
            <ReactSpecimen>
              <IconAdd className={'icon'}></IconAdd>
            </ReactSpecimen>
            <p>Add</p>
          </div>
      </Flex>
    </Flex>
    </Page>
    )
  }
}
