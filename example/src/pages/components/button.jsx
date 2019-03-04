import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Button, IconSettings, IconQuestionmark } from 'june-design-system';


export default class ButtonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rounded: false,
      outlined: false,
      clear: false,
      disabled: false,
      size: 'medium',
      content: 'Foobar',
      color: 'green',
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

  changeOutlined() {
    this.setState({
      outlined: !this.state.outlined,
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
        <ReactSpecimen>
          <Button size={this.state.size} rounded={this.state.rounded} clear={this.state.clear}
                  outlined={this.state.outlined} disabled={this.state.disabled} wide={this.state.wide}
                  color={this.state.color}>
            {this.state.content}
          </Button>
        </ReactSpecimen>

        <div>
          <div>
            <label htmlFor="isRounded">Rounded?</label>
            <input type="checkbox" value={this.state.rounded} name="isRounded" onChange={() => this.changeRounded()}/>
          </div>

          <div>
            <label htmlFor="isOutlined">Outlined?</label>
            <input type="checkbox" value={this.state.outlined} name="isOutlined"
                   onChange={() => this.changeOutlined()}/>
          </div>

          <div>
            <label htmlFor="isDisabled">Disabled?</label>
            <input type="checkbox" value={this.state.disabled} name="isDisabled" onChange={() => this.changeDisable()}/>
          </div>

          <div>
            <label htmlFor="isClear">Clear?</label>
            <input type="checkbox" value={this.state.clear} name="isClear" onChange={() => this.changeClear()}/>
          </div>

          <div>
            <label htmlFor="isFullWidth">Full width?</label>
            <input type="checkbox" value={this.state.wide} name="isFullWidth" onChange={() => this.changeWide()}/>
          </div>

          <div>
            <label htmlFor="color">Color</label>
            <select name="color" value={this.state.color} onChange={(event) => this.changeColor(event)}>
              <option value="red">red</option>
              <option value="green">green</option>
              <option value="blue">blue</option>
            </select>
          </div>
          <div>
            <label htmlFor="size">Size</label>
            <select name="size" value={this.state.size} onChange={this.changeSize}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="size">Size</label>
          <select name="size" value={this.state.size} onChange={(event) => this.changeSize(event)}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        ## Icon on the left
        <ReactSpecimen span={3}>
          <Button iconLeft={<IconSettings></IconSettings>}>Button with button</Button>
        </ReactSpecimen>

        ## Icon on the right
        <ReactSpecimen span={3}>
          < Button iconRight={< IconSettings></IconSettings>}> Button with button</Button>
        </ReactSpecimen>

        ## Only an icon
        <ReactSpecimen span={3}>
          <Button iconOnly={<IconSettings></IconSettings>}>Button with only an icon</Button>
        </ReactSpecimen>

      ## Only with questionmark
       <ReactSpecimen span={3}>
          <Button iconQuestionmark={<IconQuestionmark></IconQuestionmark>}>Button with only an icon</Button>
        </ReactSpecimen>


       ## Loading
        <ReactSpecimen span={3}>
          <Button loading="true" percentageDone="30">Loading button</Button>
        </ReactSpecimen>
        <ReactSpecimen span={3}>
          <Button loading="true" percentageDone="60">Loading button</Button>
        </ReactSpecimen>
        <ReactSpecimen span={3}>
          <Button loading="true" percentageDone="90">Loading button</Button>
        </ReactSpecimen>

        # Click events
        <ReactSpecimen span={3}>
          <Button onClick={() => this.changeClicked()}>Click</Button>
        </ReactSpecimen>
        <p>Clicked {this.state.clicked} times</p>
      </Page>
    )
  }
}
