import React from 'react';
import { Page } from 'catalog';
import {Popup, Button, IconQuestionmark} from 'june-design-system';

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
      title: event.value,
      text: event.name,
      id: event.value,
      placeholder: event.placeholder,
      visible: false
    })
  }


  render(){
    return(
      <Page>
        <div>
          <Button onClick={(event) => this.changeInputPopup((({value:'0', name:'Wat wil dit zeggen?', placeholder:'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. '})))} iconQuestionmark={<IconQuestionmark></IconQuestionmark>}></Button>
          <Button onClick={(event) => this.changeInputPopup((({value:'1', name:'Wat wil dit zeggen?', placeholder:'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas sed diam eget risus varius blandit sit amet non magna. '})))} iconQuestionmark={<IconQuestionmark></IconQuestionmark>}></Button>
          <Popup visible={this.state.visible} title={this.state.title} text={this.state.text} id={this.state.id} placeholder={this.state.placeholder}></Popup>
        </div>
      </Page>
    )
  }
}
