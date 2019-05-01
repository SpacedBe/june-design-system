import * as React from 'react';
import styled from 'styled-components';
import {IconCheck} from '../../icons';
import Color from '../../helpers/color';

let color = new Color();

interface Step {
  label: string,
}

type Props = {
  steps: Step[];
  currentStepIndex: number;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Entry = styled.div`
  // todo: fix this
  box-sizing: content-box !important;
  display: flex;
  justify-content: center;
`;

const Label = styled.div`
  position: absolute;
  top: 30px;
  text-transform: uppercase;
  color: var(--color-gray-dark);
  font-size: var(--font-size-xs);
  font-family: var(--font-secondary);
`;

const Step = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
`;

const firstStepStyle = {
  justifyContent: 'flex-start',
  width: '15%',
};

const lastStepStyle = {
  justifyContent: 'flex-end',
  width: '15%',
};

const Dot = styled.div<{ large?: boolean; color?: string; current?: boolean }>`
  width: ${props => (props.large ? '20px' : '6px')};
  height: ${props => (props.large ? '20px' : '6px')};
  background-color: ${props =>
  props.current
    ? color.getColorContrast('primary')
    : color.getColor('primary')};
  border: ${props =>
  props.current ? `5px solid var(--color-primary)` : 'none'};
  border-radius: 50%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LineStyled = styled.div<{steps: number}>`
  position: absolute;
  border-bottom: 2px solid rgba(var(--color-primary-rgb), 0.25);
  z-index: 0;
  width: ${props => (props.steps * 20) - (props.steps * 0.25)}%;
`;

export class Stepper extends React.Component<Props> {
  validateSteps(steps: Step[]) {
    if (steps.length > 6) {
      console.error('Maximum 6 steps can be passed to the StepperComponent');
    }
  }

  render() {
    this.validateSteps(this.props.steps);

    return (
      <Wrapper>
        {
          this.props.steps.map((step, index) => {
              let modifierStyle;
              let dot;

              if (index === 0) {
                modifierStyle = firstStepStyle;
              }

              if (index === this.props.steps.length - 1) {
                modifierStyle = lastStepStyle;
              }

              if (index === this.props.currentStepIndex) {
                // current step
                dot = (
                  <Dot large={false} current={true}/>
                );
              } else if (index < this.props.currentStepIndex) {
                // past steps
                dot = (
                  <Dot large={true}>
                    <IconCheck fill={'white'}/>
                  </Dot>

                );
              } else {
                // future steps
                dot = (
                  <Dot large={false}></Dot>
                );
              }

              return (
                <Step key={index} style={modifierStyle}>
                  <Entry>
                    {dot}
                    <Label>{step.label}</Label>
                  </Entry>
                </Step>
              );
            }
          )
        }
        <LineStyled steps={this.props.steps.length}/>
      </Wrapper>
    );
  }
}
