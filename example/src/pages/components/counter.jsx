import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Counter, Button } from 'june-design-system';

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
      this.setState({
        clicked: this.state.clicked - 1
      });
    }
    render(){
        return(
          <Page>
          # Counter
            <ReactSpecimen span={3}>
              <Counter>
                <span>{this.state.clicked}</span>
                <Button clear color="green" size="small" htmlfor="isClicked" onClick={() => this.changeDownClicked()}>
                  -
                </Button>
                  <Button clear color="green" size="small" htmlfor="isClicked" onClick={() => this.changeUpClicked()}>
                    +
                </Button>
              </Counter>
            </ReactSpecimen>
          </Page>
        )
    }
}
