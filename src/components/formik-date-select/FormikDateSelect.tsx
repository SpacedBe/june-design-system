/**
 * @class FormikDateSelect
 */

import * as React from 'react';
import styled from 'styled-components';
import {getIn} from 'formik';
import Color from "../../helpers/color";
import moment from 'moment';

interface Option {
  label: string,
  value: string,
}

type Props = {
  setValue: any;
  locale: string;

  field: {
    name: string;
  }
  form: {
    ['errors']: string;
    ['touched']: boolean;
  };

  ['serverErrors']: string;

  options: Option[],
  label?: string,
  error: boolean,
  disabled: boolean,
};

const colorHelper = new Color();

const WrapperStyled = styled.div<{ error?: boolean; disabled?: boolean; }>`
  text-align: left;
  width: 100%;
`;

const Select = styled.select<{
  error?: boolean;
  disabled?: boolean;
}>`
  border: ${props =>
  props.error
    ? `2px solid var(--color-error)`
    : `2px solid var(--color-gray-light)`};
  padding: 10px 10px 10px 10px;
  border-radius: 2.5px;
  background: var(--color-white);
  outline: none;
  display: flex;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  justify-content: space-between;
  height: 40px;
  width: 100%;
`;

const Label = styled.label<{
  error?: boolean;
  disabled?: boolean;
}>`
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  color: ${props =>
  props.error
    ? `var(--color-error)`
    : `var(--color-gray-light)`};
  font-family: var(--font-secondary);
  font-size: var(--font-size-m);
`;

const Option = styled.option`
  color: var(--color-gray);
`;

const ErrorMessageStyled = styled.span`
  font-size: var(--font-size-s);
  color: ${colorHelper.getColor('error')};
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-xs);
`;

export class FormikDateSelect extends React.Component<Props, {
  months: Option[];
  years: Option[];
  days: Option[];

  selectedDay: string;
  selectedMonth: string;
  selectedYear: string;
}> {
  constructor(props: Props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    this.populate();
  }

  handleChange(event: any, type: string) {
    const newState = {};

    newState[type] = event.target.value;

    this.setState(newState, () => {
      const {selectedDay, selectedMonth, selectedYear} = this.state;

      if (selectedDay, selectedMonth, selectedYear) {
        this.props.setValue(`${selectedDay}/${selectedMonth}/${selectedYear}`);
      }
    });
  }

  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = (this.props.serverErrors && this.props.serverErrors[name]) || error;

    return (
      <WrapperStyled disabled={this.props.disabled} error={!!errors && touched}>
        <Label
          disabled={this.props.disabled}
          htmlFor={name}>
          {label}
        </Label>

        <Select
          value={this.state.selectedDay}
          onChange={(event) => this.handleChange(event, 'selectedDay')}
          disabled={this.props.disabled}>
          <Option>
            DD
          </Option>
          {this.state.days.map((item: any) => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>

        <Select
          value={this.state.selectedMonth}
          onChange={(event) => this.handleChange(event, 'selectedMonth')}
          disabled={this.props.disabled}>
          <Option>
            MM
          </Option>
          {this.state.months.map((item: any) => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>

        <Select
          value={this.state.selectedYear}
          onChange={(event) => this.handleChange(event, 'selectedYear')}
          disabled={this.props.disabled}>
          <Option>
            YYYY
          </Option>

          {this.state.years.map((item: any) => (
            <Option key={item.value} value={item.value}>
              {item.label}
            </Option>
          ))}
        </Select>

        {touched && errors && <ErrorMessageStyled>{errors}</ErrorMessageStyled>}
      </WrapperStyled>
    );
  }

  populate() {
    const days = [];
    const months = [];
    const years = [];

    for (let i = 1; i <= 31; i++) {
      let day;

      if (i < 10) {
        day = `0${i}`;
      } else {
        day = `${i}`;
      }

      days.push({
        value: day,
        label: `${i}`,
      });
    }

    for (let i = 1; i <= 12; i++) {
      let month;

      if (i < 10) {
        month = `0${i}`;
      } else {
        month = `${i}`;
      }

      months.push({
        value: month,
        label: moment.months()[i - 1],
      });
    }

    for (let i = moment().get('year') - 16; i >= moment().get('year') - 116; i--) {
      const year = `${i}`;

      years.push({
        value: year,
        label: year,
      });
    }

    this.setState({
      days,
      months,
      years,
    });
  }
}
