import React from 'react';
import { Page } from 'catalog';
import {Popup, IconQuestionmark} from 'june-design-system';

export default class ButtonPage extends React.Component {

  constructor() {
    super();
    this.state = {
     visible: false,
     title: '',
     text: '',
     id: '',
     placeholder: ''
    };
  }

  changeInputPopup(event){
    this.setState({
      title: event.target.value,
      text: event.target.name,
      id: event.target.value,
      placeholder: event.target.placeholder
    })
  }


  render(){
    return(
      <Page>
        <IconQuestionmark></IconQuestionmark>
        <Popup visible={this.state.visible} title={this.state.title} text={this.state.text} id={this.state.id} placeholder={this.state.placeholder}></Popup>
        <div>
          {/* <button onClick={(event) => this.changeInputPopup(event)} value="0" name="did you know"><IconWater></IconWater></button> */}
          <input onClick={(event) => this.changeInputPopup(event)} type="button" value="0" name="Did you know?" placeholder="Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. "/>
          <input onClick={(event) => this.changeInputPopup(event)} type="button" value="1" name="Wist Je dit al" placeholder="Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. "/>
          <input onClick={(event) => this.changeInputPopup(event)} type="button" value="2" name="Weetje drie" placeholder="penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. " />
        </div>
      </Page>
    )
  }
}
