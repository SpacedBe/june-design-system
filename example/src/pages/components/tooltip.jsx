import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import {Popup, IconWater} from 'june-design-system';

export default class ButtonPage extends React.Component {

  constructor() {
    super();
    this.state = {
     visible: false,
     title: '',
     text: ''
    };
  }

  changeInputPopup(event){
    this.setState({
      title: event.target.value,
      text: event.target.name
    })
  }


  render(){
    return(
      <Page>
        <Popup visible={this.state.visible} title={this.state.title} text={this.state.text}></Popup>
        <div>
          <button onClick={(event) => this.changeInputPopup(event)} value="0" name="did you know"><IconWater></IconWater></button>
          <input onClick={(event) => this.changeInputPopup(event)} type="button" value="1" name="Wist je dit al?"/>
        </div>
      </Page>
    )
  }
}
