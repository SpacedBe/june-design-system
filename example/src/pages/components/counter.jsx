import React from 'react';
import { Page } from 'catalog';
import { Counter } from 'june-design-system';

export default class CounterPage extends React.Component {
    constructor(){
        super();
        this.state = {
          clicked: 0
        };
        this.changeUpClicked = this.changeUpClicked.bind(this);
        this.changeDownClicked = this.changeDownClicked.bind(this);
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
            <Counter
              changeUpClicked={this.changeUpClicked}
              changeDownClicked={this.changeDownClicked}
              clicked={this.state.clicked}
            >
            </Counter>
          </Page>
        );
    }
}
