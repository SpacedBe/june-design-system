import React from 'react';
import { Page } from 'catalog';
import { Footer } from 'june-design-system';

export default class FixedFooterPage extends React.Component {
  constructor(){
    super();
    this.state = {

    };
  }
  render(){
    return(
      <Page>
      ## Footer
        <Footer>
        </Footer>
      </Page>
    )
  }
}
