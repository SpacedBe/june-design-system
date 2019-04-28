/**
 * @class FormikToggle
 */

import * as React from 'react';
import styled from 'styled-components';

type Props = {
  field: {
    name: string;
  };

  validationMessage: string;
  label: string;
  placeholderText: string;
  tooltip?: any;
  focused: boolean;
  icon?: any;
};

const ToggleInput = styled.input<{}>`
  z-index: var(--zi-200);
  opacity: 0;
  width: 40px;
  height: 15px;
  position: absolute;
  &:checked ~ label span {
    transform: translatex(30px);
    transition: transform var(--transition-speed-normal) ease-in;
  }
  &:checked ~ label {
    background: var(--color-primary);
    border: 2px solid var(--color-primary-shade);
    transition: transform var(--transition-speed-normal) ease-in;
  }

  &:checked ~ label p {
    opacity: 1;
    content: I;
    transform: translateX(-20px);
    color: var(--color-white);
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 40px;
  height: 15px;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  background: var(--color-gray-light);
  border: 2px solid var(--color-gray);
  font-family: var(--font-secondary);
  font-size: var(--font-size-l);
`;

const Switch = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  left: -10px;
  top: -7px;
  border-radius: 25px;
  background: var(--color-white);
  border: 2px solid var(--color-gray);
  transition: transform var(--transition-speed-normal) ease-in;
`;

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-s);
  padding-bottom: var(--spacing-s);
  border-bottom: 1px solid rgba(var(--color-primary-rgb), .25);
`;

const TooltipWrapperStyled = styled.div`
  marign-right: var(--spacing-s);
`;

const TooltipIconStyled = styled.span`
  font-size: var(--icon-size-s);
`;

const LabelBeforeToggle = styled.label`
  display: flex;
  font-family: var(--font-secondary);
  margin-right: var(--spacing-s);
`;

const LabelBeforeToggleIconStyled = styled.span`
  display: flex;
  font-size: var(--icon-size-l);
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export class FormikToggle extends React.Component<Props> {
  constructor(props: any) {
    super(props);
  }

  render() {
    let tooltip;

    if (!this.props.tooltip && !this.props.icon) {
      tooltip = (<LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>);
    }

    if (this.props.tooltip) {
      tooltip = (
        <FlexDiv>
          <TooltipIconStyled>{this.props.tooltip}</TooltipIconStyled>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
        </FlexDiv>
      );
    }

    if (this.props.icon && this.props.tooltip) {
      tooltip = (
        <FlexDiv>
          <TooltipIconStyled>{this.props.tooltip}</TooltipIconStyled>
          <LabelBeforeToggle>{this.props.label}</LabelBeforeToggle>
          <LabelBeforeToggleIconStyled>{this.props.icon}</LabelBeforeToggleIconStyled>
        </FlexDiv>
      );
    }

    return (
      <div>
        <WrapperStyled>
          <TooltipWrapperStyled>
            {tooltip}
          </TooltipWrapperStyled>

          <div>
            <ToggleInput
              {...this.props.field}
              type='checkbox'
            />

            <Label>
              <Switch></Switch>
            </Label>
          </div>
        </WrapperStyled>
      </div>
    );
  }
}
