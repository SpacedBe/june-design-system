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
    :after {
      content: 'I';
      visibility: visible;
      display: block;
      position: absolute;
      transform: translateX(2px);
    }
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
  :after {
    top: -2px;
    left: 4px;
    font-size: 10px;
    content: 'O';
    visibility: visible;
    display: block;
    color: var(--color-white);
    position: absolute;
    transform: translateX(20px);
  }
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
  margin-bottom: var(--spacing-m);
  padding-bottom: var(--spacing-m);
  border-bottom: 1px solid rgba(var(--color-primary-rgb), .25);
`;

const TooltipWrapperStyled = styled.div`
  margin-right: var(--spacing-s);
`;

const TooltipIconStyled = styled.span`
  font-size: var(--icon-size-xs);
  line-height: 0;
  margin-right: var(--spacing-s);
`;

const LabelBeforeToggleStyled = styled.label`
  display: flex;
  font-family: var(--font-secondary);
  font-size: var(--font-size-l);
  margin-right: var(--spacing-s);
`;

const LabelBeforeToggleIconStyled = styled.span`
  display: flex;
  font-size: var(--icon-size-xl);
`;

const FlexDivStyled = styled.div`
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
      tooltip = (<LabelBeforeToggleStyled>{this.props.label}</LabelBeforeToggleStyled>);
    }

    if (this.props.tooltip) {
      tooltip = (
        <FlexDivStyled>
          <TooltipIconStyled>{this.props.tooltip}</TooltipIconStyled>
          <LabelBeforeToggleStyled>{this.props.label}</LabelBeforeToggleStyled>
        </FlexDivStyled>
      );
    }

    if (this.props.icon && this.props.tooltip) {
      tooltip = (
        <FlexDivStyled>
          <TooltipIconStyled>{this.props.tooltip}</TooltipIconStyled>
          <LabelBeforeToggleStyled>{this.props.label}</LabelBeforeToggleStyled>
          <LabelBeforeToggleIconStyled>{this.props.icon}</LabelBeforeToggleIconStyled>
        </FlexDivStyled>
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
