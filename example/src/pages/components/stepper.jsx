import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Stepper} from 'june-design-system';

export default class StepPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        {label: 'foo'},
        {label: 'bar'},
        {label: 'baz'},
        {label: 'bam'},
      ],
      currentStepIndex: 0
    };
  }

  addStep() {
    if (this.state.steps.length >= 6) {
      return;
    }

    this.setState({
      steps: [...this.state.steps, {label: 'New'}]
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
        <ReactSpecimen>
          <Stepper steps={this.state.steps} currentStepIndex={this.state.currentStepIndex}/>
        </ReactSpecimen>

        <div>
          <p>Controls</p>
          <button onClick={() => this.addStep()}>Add one step</button>
          <button onClick={() => this.removeStep()}>Remove one step</button>
          <button onClick={() => this.decrementCurrentStep()}>Decrement step</button>
          <button onClick={() => this.incrementCurrentStep()}>Increment step</button>
        </div>
      </Page>
    )
  }
}
