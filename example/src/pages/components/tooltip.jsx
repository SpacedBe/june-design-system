import React from 'react';
import { Page } from 'catalog';
import {Popup, Button, IconQuestionmark} from 'june-design-system';
import monster from "../../assets/images/monster.png"

export default class ButtonPage extends React.Component {

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

  changeInputPopup(event){
    this.setState({
      title: event.value,
      text: event.name,
      id: event.value,
      placeholder: event.placeholder,
      show: true,
      className: "popup--afterClick",
      img: monster
    })

  }

  handleClose(event){
    const styler = document.getElementById(this.state.id);
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

  render(){
   const toggleClass = this.state.show ? "popup" : "";
    return(
      <Page>
        <div>
          <Button onClick={(event) => this.changeInputPopup((({ value: '0', name: 'Wat wil dit zeggen?', placeholder:'Schakel dit aan wanneer je een tweede elektriciteitsmeter voor je exclusief nachtverbruik hebt. Indien je een gewone dag/nacht meter hebt, met beide telwerken in dezelfde meterkast, moet deze dienst niet inschakelen.', show: true})))} iconQuestionmark={<IconQuestionmark></IconQuestionmark>}></Button>
          <p>Gas</p>
          <Button onClick={(event) => this.changeInputPopup((({ value: '1', name: 'Wat wil dit zeggen?', placeholder: 'Schakel dit aan wanneer je een tweede elektriciteitsmeter voor je exclusief nachtverbruik hebt. Indien je een gewone dag/nacht meter hebt, met beide telwerken in dezelfde meterkast, moet deze dienst niet inschakelen.', show: true})))} iconQuestionmark={<IconQuestionmark></IconQuestionmark>}></Button>
          <p>Elektriciteit</p>
          <Popup name="popup" img={this.state.img} onHide={this.handleClose} show={this.state.show} className={toggleClass} close={(event) => this.handleClose((({show: false })))} visible={this.state.visible} title={this.state.title} text={this.state.text} id={this.state.id} placeholder={this.state.placeholder}></Popup>
        </div>
      </Page>
    )
  }
}
