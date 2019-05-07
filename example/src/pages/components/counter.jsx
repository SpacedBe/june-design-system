import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Counter} from 'june-design-system';

export default class CounterPage extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: 0
    };
    this.changeUpClicked = this.changeUpClicked.bind(this);
    this.changeDownClicked = this.changeDownClicked.bind(this);
  }

  changeUpClicked() {
    this.setState({
      clicked: this.state.clicked + 1
    });
  }

  changeDownClicked() {
    if (this.state.clicked >= 1) {
      this.setState({
        clicked: this.state.clicked - 1
      });
    }
  }

  render() {
    return (
      <Page>
        Number of times clicked: <span>{this.state.clicked}</span>
        <ReactSpecimen>
          <Counter onClickUp={() => this.changeUpClicked()}
                   onClickDown={() => this.changeDownClicked()}/>
        </ReactSpecimen>
      </Page>
    );
  }
}
