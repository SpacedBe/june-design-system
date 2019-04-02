import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Counter, Button, SvgSettings, IconAdd, IconRemove } from 'june-design-system';

export default class CounterPage extends React.Component {
    constructor(){
        super();
        this.state = {
          clicked: 0
        };
    }

    changeUpClicked(){
      this.setState({
        clicked: this.state.clicked + 1
      });
    }

  changeDownClicked() {
    if (this.state.clicked >= 1){
      this.setState({
        clicked: this.state.clicked - 1
      });
    }
  }
    render(){
        return (
          <Page>
            # Counter
            <Counter>
              <span>{this.state.clicked}</span>
                <Button
                  iconButton={<IconRemove />}
                  clear
                  color="green"
                  size="xsmall"
                  htmlfor="isClicked"
                  onClick={() => this.changeDownClicked()}
                />
                <Button
                  iconButton={<IconAdd />}
                  clear
                  color="green"
                  size="xsmall"
                  htmlfor="isClicked"
                  onClick={() => this.changeUpClicked()}
                />
            </Counter>
          </Page>
        );
    }
}
