import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Popup, Button, IconQuestionmark} from 'june-design-system';

export default class PopupPage extends React.Component {

  constructor() {
    super();

    this.state = {
      show: false,
      title: '',
      text: '',
      id: '',
      placeholder: '',
      className: '',
      img: ''
    };
  }

  changeInputPopup(event) {
    console.log('aaa', event);
    this.setState({
      title: event.title,
      text: event.name,
      placeholder: event.placeholder,
      show: true,
      className: "popup--afterClick",
    })
  }

  handleClose(event) {
    this.setState({
      show: false,
      title: '',
      text: '',
      id: '',
      placeholder: '',
      className: '',
      img: ''
    })
  }

  render() {
    return (
      <div>
        <Page>
          ## Popup
          <div>
            <p>Click this button to show popup</p>
            <ReactSpecimen>
              <Button onClick={(event) => this.changeInputPopup({
                value: '0',
                title: 'This is a title',
                name: 'Wat wil dit zeggen?',
                placeholder: 'blabla.',
                show: true
              })}
              >Show the popup</Button>
            </ReactSpecimen>

            <ReactSpecimen>
              <Button onClick={(event) => this.changeInputPopup({
                value: '1',
                title:'This is a title',
                name: 'Wat wil dit zeggen?',
                placeholder: 'blabla.',
                show: true
              })}
              iconOnly={<IconQuestionmark/>}
              >Show the popup
              </Button>
            </ReactSpecimen>

          </div>
          <Popup title={this.state.title}
                 show={this.state.show}
                 close={(event) => this.handleClose({show: false})}>
            This is an amazing popup that transcludes the content!
          </Popup>
        </Page>
      </div>
    )
  }
}
