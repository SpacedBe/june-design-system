import * as React from 'react';
import styled from 'styled-components';
import {IconCheck} from '../../icons';

interface Step {
  label: string,
}

type Props = {
  steps: Step[];
  currentStepIndex: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Entry = styled.div`
  display: flex;
  justify-content: center;
`;

const Label = styled.div`
  position: absolute;
  top: 20px;
  text-transform: uppercase;
  color: #888E90 //todo: variable
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  border-bottom: 2px solid #DFF2F2;
  z-index: 0;
`;

const Step = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
`;

const firstStepStyle = {
  justifyContent: 'flex-start',
  width: '10%',
};

const lastStepStyle = {
  justifyContent: 'flex-end',
  width: '10%',
};

const Dot = styled.div<{ large?: boolean, color?: string, current?: boolean }>`
  width: ${props => props.large ? '20px' : '6px'};
  height: ${props => props.large ? '20px' : '6px'};
  background-color: ${props => props.current ? '#ffffff' : '#46ACA6'};
  border: ${props => props.current ? '5px solid #46ACA6' : 'none'};
  border-radius: 50%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export class Stepper extends React.Component<Props> {
  validateSteps(steps: Step[]) {
    if (steps.length > 6) {
      console.error('Maximum 6 steps can be passed to the StepperComponent');
    }
  }

  render() {
    this.validateSteps(this.props.steps);

    let lineStyle = {
      width: ((this.props.steps.length - 2) * 20 + (2 * 10)) + '%'
    };

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
                // current steps
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
                // future step
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

        <Line style={lineStyle}></Line>
      </Wrapper>
    );
  }
}
