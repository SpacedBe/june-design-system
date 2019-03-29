import React from 'react';
import { Page } from 'catalog';
import { FormikFixedFooter } from 'june-design-system';

export default class FixedFooterPage extends React.Component {
    constructor(){
        super();
        this.state = {

        };
    }
    render(){
        return(
          <Page>
            <FormikFixedFooter>
            </FormikFixedFooter>
          </Page>
        )
    }
}
