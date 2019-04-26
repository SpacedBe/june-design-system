import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Stepper, Button} from 'june-design-system';
import {Flex} from 'reflexbox';

export default class StepPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: [
        { label: 'step 1' },
        { label: 'step 2' },
        { label: 'step 3' },

      ],
      currentStepIndex: 0
    };
  }

  addStep() {
    if (this.state.steps.length >= 4) {
      console.log(this.state.steps.length)
      return;
    }

    this.setState({
      steps: [...this.state.steps, {label: 'New step'}]
    });
  }

  removeStep() {
    let updatedSteps = [...this.state.steps];
    if(this.state.steps.length >= 2){
      updatedSteps.splice(-1, 1);
    }
    if(this.state.steps.length <=2){
      return;
    }

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
      <div className="stepper">
        <Page>
          ## Stepper Controls
          <Flex justify={'space-between'}>
            <Button className="buttonWrapper" clear={false} disabled={false} onClick={() => this.addStep()} rounded={false} wide={false} size='small'>
              Add one step
            </Button>
            <Button className="buttonWrapper" clear={false} disabled={false} onClick={() => this.removeStep()} rounded={false} wide={false} size='small'>
              Remove one step
            </Button>
            <Button className="buttonWrapper" clear={false} disabled={false} onClick={() => this.decrementCurrentStep()} rounded={false} wide={false} size='small'>
              Uncomplete one step
            </Button>
            <Button className="buttonWrapper" clear={false} disabled={false} onClick={() => this.incrementCurrentStep()} rounded={false} wide={false} size='small'>
              Complete one step
            </Button>
          </Flex>
          <ReactSpecimen >
            <div className="paddingLarge">
              <Stepper
                steps={this.state.steps}
                currentStepIndex={this.state.currentStepIndex}
              />
            </div>
          </ReactSpecimen>
        </Page>
      </div>
    );
  }
}
