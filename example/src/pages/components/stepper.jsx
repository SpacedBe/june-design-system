import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Button, Stepper} from 'june-design-system';
import {Flex} from 'reflexbox';

export default class StepPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        {label: 'step 1'},
        {label: 'step 2'},
        {label: 'step 3'},
        {label: 'step 4'}
      ],
      currentStepIndex: 0
    };
  }

  addStep() {
    if (this.state.steps.length >= 6) {
      return;
    }

    this.setState({
      steps: [...this.state.steps, {label: 'New step'}]
    });
  }

  removeStep() {
    let updatedSteps = [...this.state.steps];
    updatedSteps.splice(-1, 1);

    this.setState({
      steps: updatedSteps
    });
  }


  incrementCurrentStep() {
    if (this.state.currentStepIndex >= this.state.steps.length) {
      return;
    }

    this.setState({
      currentStepIndex: this.state.currentStepIndex + 1
    });
  }

  decrementCurrentStep() {
    if (this.state.currentStepIndex <= 0) {
      return;
    }

    this.setState({
      currentStepIndex: this.state.currentStepIndex - 1
    });
  }

  render() {

    return (
        <Page>
          <Flex>
            <div className="wrapper">
              <Button onClick={() => this.decrementCurrentStep()}>
                Uncomplete step
              </Button>
            </div>

            <div className="wrapper">
              <Button onClick={() => this.incrementCurrentStep()}>
                Complete step
              </Button>
            </div>
          </Flex>
          <ReactSpecimen>
            <Stepper
              steps={this.state.steps}
              currentStepIndex={this.state.currentStepIndex}
            />
          </ReactSpecimen>
        </Page>
    );
  }
}
