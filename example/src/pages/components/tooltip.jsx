import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import {Popup} from 'june-design-system';

export default class ButtonPage extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      text: ''
    };
  }

  showPopup(){
    this.setState({
      title: 'Wat wil dit zeggen?',
      text: 'Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. '
    })
  }

  render(){
    return(
      <Page>
        <ReactSpecimen span="3">
          <Popup title={this.state.title} text={this.state.text}></Popup>
        </ReactSpecimen>
        <button onClick={() => this.showPopup()}>Show Popup</button>
      </Page>
    )
  }
}
