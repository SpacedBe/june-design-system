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
  IconLightning,
} from 'june-design-system';
import {Flex} from 'reflexbox';

export default class IconPage extends React.Component {

  render() {
    return (
      <Page>
        <Flex wrap column className={'icons'}>
          <Flex>
            <div>
              <ReactSpecimen>
                <IconPreferences className={'icon'} />
              </ReactSpecimen>
              <p>Preferences</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconSavings className={'icon'} />
              </ReactSpecimen>
              <p>Savings</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconSettings className={'icon'} />
              </ReactSpecimen>
              <p>Settings</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconWater className={'icon'} />
              </ReactSpecimen>
              <p>Water</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconWaterBattery className={'icon'} />
              </ReactSpecimen>
              <p>Battery</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconCheck className={'icon'} />
              </ReactSpecimen>
              <p>Check</p>
            </div>
          </Flex>

          <Flex justify='space-between' order={2} wrap>
            <div>
              <ReactSpecimen>
                <IconMail className={'icon'} />
              </ReactSpecimen>
              <p>Mail</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconPhone className={'icon'} />
              </ReactSpecimen>
              <p>Phone</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconChat className={'icon'} />
              </ReactSpecimen>
              <p>Chat</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconElectricity className={'icon'} />
              </ReactSpecimen>
              <p>Electricity</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconGas className={'icon'} />
              </ReactSpecimen>
              <p>Gas</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconCalender className={'icon'} />
              </ReactSpecimen>
              <p>Calender</p>
            </div>
          </Flex>

          <Flex justify='space-between' order={2} wrap>
            <div>
              <ReactSpecimen>
                <IconQuestionmark className={'icon'} />
              </ReactSpecimen>
              <p>Questionmark</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconClose className={'icon'} />
              </ReactSpecimen>
              <p>Close</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconJune className={'icon'} />
              </ReactSpecimen>
              <p>June</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconRemove className={'icon'} />
              </ReactSpecimen>
              <p>Remove</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconAdd className={'icon'} />
              </ReactSpecimen>
              <p>Add</p>
            </div>

            <div>
              <ReactSpecimen>
                <IconLightning className={'icon'} />
              </ReactSpecimen>
              <p>Lightning</p>
            </div>
          </Flex>
        </Flex>
      </Page>
    );
  }
}
