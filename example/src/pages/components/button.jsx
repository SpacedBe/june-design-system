import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Button, IconSettings, FormikCheckbox} from 'june-design-system';

export default class ButtonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rounded: false,
      clear: false,
      disabled: false,
      size: 'medium',
      content: 'Foobar',
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
      <Page>
        ## Buttons
        <div className="flexBox">
          <ReactSpecimen>
            <Button
              size={this.state.size}
              rounded={this.state.rounded}
              clear={this.state.clear}
              disabled={this.state.disabled}
              wide={this.state.wide}
              color={this.state.color}
              onClick={this.state.clicked}
            >
              {this.state.content}
            </Button>
          </ReactSpecimen>
          <div className="flex">
            <div className='div'>
              <label htmlFor='isRounded'>Rounded</label>
              <input
                className=''
                type='checkbox'
                value={this.state.rounded}
                name='isRounded'
                onChange={() => this.changeRounded()}
              />
            </div>

            <div className='div'>
              <label htmlFor='isDisabled'>Disabled</label>
              <input
                type='checkbox'
                value={this.state.disabled}
                name='isDisabled'
                onChange={() => this.changeDisable()}
              />
            </div>

            <div className='div'>
              <label htmlFor='isClear'>Clear</label>
              <input
                type='checkbox'
                value={this.state.clear}
                name='isClear'
                onChange={() => this.changeClear()}
              />
            </div>

            <div className='div'>
              <label htmlFor='isFullWidth'>Full width</label>
              <input
                type='checkbox'
                value={this.state.wide}
                name='isFullWidth'
                onChange={() => this.changeWide()}
              />
            </div>

            <div className='div'>
              <label htmlFor='color'>Color</label>
              <select
                name='color'
                value={this.state.color}
                onChange={event => this.changeColor(event)}
              >
                <option value='primary'>green</option>
                <option value='error'>red</option>
                <option value='facebook'>blue</option>
              </select>
            </div>

            <div className='div'>
              <label htmlFor='size'>Size</label>
              <select
                name='size'
                value={this.state.size}
                onChange={event => this.changeSize(event)}
              >
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
              </select>
            </div>
          </div>
        </div>
        ## Icon on the left
        <ReactSpecimen>
          <Button iconLeft={<IconSettings />}>Button with icon</Button>
        </ReactSpecimen>
        ## Icon on the right
        <ReactSpecimen>
          <Button iconRight={<IconSettings />}> Button with icon</Button>
        </ReactSpecimen>
        ## Only an icon
        <ReactSpecimen>
          <Button iconOnly={<IconSettings />}>
            Button with only an icon
          </Button>
        </ReactSpecimen>
        ## Only an icon, with border
        <ReactSpecimen>
          <Button iconButtonWithBorder={<IconSettings />}/>
        </ReactSpecimen>
        ## Loading
        <ReactSpecimen>
          <Button loading='true'>Loading button</Button>
        </ReactSpecimen>
        # Click events
        <ReactSpecimen>
          <Button htmlfor='isClicked' onClick={() => this.changeClicked()}>
            Click
          </Button>
        </ReactSpecimen>
        <p>Clicked {this.state.clicked} times</p>
      </Page>
    );
  }
}
