import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Button, IconSettings, FormikCheckbox, FormikSelect} from 'june-design-system';
import {Flex} from 'reflexbox';

export default class ButtonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rounded: false,
      outlined: false,
      clear: false,
      disabled: false,
      size: 'medium',
      content: 'Button',
      color: 'primary',
      wide: false,
      selectedColor: '',
      clicked: 0
    };
  }

  changeRounded() {
    this.setState({
      rounded: !this.state.rounded,
    });
  }

  changeOutline() {
    this.setState({
      outlined: !this.state.outlined
    });
  }

  changeClear() {
    this.setState({
      clear: !this.state.clear
    });
  }

  changeDisable() {
    this.setState({
      disabled: !this.state.disabled
    });
  }

  changeWide() {
    this.setState({
      wide: !this.state.wide
    });
  }

  changeColor(event) {
    this.setState({color: event.target.value})
  }

  changeSize(event) {
    this.setState({size: event.target.value})
  }

  changeClicked() {
    this.setState({
      clicked: this.state.clicked + 1
    });
  }

  render() {
    return (
      <div className='buttons'>
        <Page>
          ## Buttons
          <div className='flexBox'>
            <ReactSpecimen>
              <Button
                size={this.state.size}
                rounded={this.state.rounded}
                outlined={this.state.outlined}
                clear={this.state.clear}
                disabled={this.state.disabled}
                wide={this.state.wide}
                color={this.state.color}
                onClick={this.state.clicked}>
                  {this.state.content}
              </Button>
            </ReactSpecimen>
            <Flex justify={'space-between'} column>
              <Flex>
                <div className='wrapper'>
                  <FormikCheckbox
                    error={false}
                    field={{
                      name: 'isRounded',
                      value: this.state.rounded,
                      onChange: () => this.changeRounded()
                    }}
                    form={{
                      errors: {'example-input': null},
                      touched: {'example-input': false}
                    }}
                    label='Rounded'
                    type='checkbox'
                  />
                </div>

                <div className='wrapper'>
                  <FormikCheckbox
                    error={false}
                    field={{
                      name: 'isDisabled',
                      value: this.state.disabled,
                      onChange: () => this.changeDisable()
                    }}
                    form={{
                      errors: {'example-input': null},
                      touched: {'example-input': false}
                    }}
                    label='Disabled'
                    type='checkbox'
                  />
                </div>

                <div className='wrapper'>
                  <FormikCheckbox
                    error={false}
                    field={{
                      name: 'isOutlined',
                      value: this.state.outlined,
                      onChange: () => this.changeOutline()
                    }}
                    form={{
                      errors: {'example-input': null},
                      touched: {'example-input': false}
                    }}
                    label='Outlined'
                    type='checkbox'
                  />
                </div>

                <div className='wrapper'>
                  <FormikCheckbox
                    error={false}
                    field={{
                      name: 'isClear',
                      value: this.state.clear,
                      onChange: () => this.changeClear()
                    }}
                    form={{
                      errors: {'example-input': null},
                      touched: {'example-input': false}
                    }}
                    label='Clear'
                    type='checkbox'
                  />
                </div>

                <div className='wrapper'>
                  <FormikCheckbox
                    error={false}
                    field={{
                      name: 'isFullWidth',
                      value: this.state.wide,
                      onChange: () => this.changeWide()
                    }}
                    form={{
                      errors: {'example-input': null},
                      touched: {'example-input': false}
                    }}
                    label='Full Width'
                    type='checkbox'
                  />
                </div>
              </Flex>
              <Flex>
                <div className='wrapper'>
                  <FormikSelect
                    disabled={false}
                    error={false}
                    field={{
                      name: 'color',
                      value: this.state.color,
                      onChange: event => this.changeColor(event)
                    }}
                    form={{
                      errors: {'example-input': null},
                      touched: {'example-input': false}
                    }}
                    htmlFor='isSelect'
                    label='Color'
                    options={[
                      {label: 'green', value: 'primary'},
                      {label: 'red', value: 'error'},
                      {label: 'facebook', value: 'facebook'},
                      {label: 'google', value: 'google'}
                    ]}
                    touched={false}
                  />
                </div>
                <div className='wrapper'>
                  <FormikSelect
                    disabled={false}
                    error={false}
                    field={{
                      name: 'size',
                      value: this.state.size,
                      onChange: event => this.changeSize(event)
                    }}
                    form={{
                      errors: {'example-input': null},
                      touched: {'example-input': false}
                    }}
                    htmlFor='isSelect'
                    label='Size'
                    options={[
                      {label: 'small', value: 'small'},
                      {label: 'medium', value: 'medium'},
                      {label: 'large', value: 'large'}
                    ]}
                    touched={false}
                  />
                </div>
              </Flex>
            </Flex>
          </div>
          ## Icon on the left
          <ReactSpecimen>
            <Button iconLeft={<IconSettings/>}>Button with icon</Button>
          </ReactSpecimen>
          ## Icon on the right
          <ReactSpecimen>
            <Button iconRight={<IconSettings/>}> Button with icon</Button>
          </ReactSpecimen>
          ## Only an icon
          <ReactSpecimen>
            <Button iconOnly={<IconSettings/>}>
              Button with only an icon
            </Button>
          </ReactSpecimen>
          ## Loading
          <ReactSpecimen>
            <Button loading='true'>Loading button</Button>
          </ReactSpecimen>
          # Click events
          <p>Clicked {this.state.clicked} times</p>
          <ReactSpecimen>
            <Button
              htmlfor='isClicked'
              onClick={() => this.changeClicked()}
            >
              Click
            </Button>
          </ReactSpecimen>
        </Page>
      </div>
    );
  }
}
