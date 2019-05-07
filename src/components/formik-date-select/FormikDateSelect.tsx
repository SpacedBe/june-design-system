/**
 * @class FormikDateSelect
 */

import React from 'react';
import styled from 'styled-components';
import {getIn} from 'formik';
import Color from "../../helpers/color";
import * as moment_ from 'moment';
import {FormikSelect} from "../formik-select/FormikSelect";

const moment = moment_;

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
  translations: {
    dayPlaceholder: string,
    monthPlaceholder: string,
    yearPlaceholder: string
  }
};

const colorHelper = new Color();

const WrapperStyled = styled.div<{ error?: boolean; disabled?: boolean; }>`
  text-align: left;
  width: 100%;
`;

const FlexStyled = styled.div`
  display: flex;

  > * {
    margin-right: var(--spacing-m);
  }

  > *:last-of-type {
    margin-right: 0;
  }
`;

const LabelStyled = styled.label<{
  error?: boolean;
  disabled?: boolean;
}>`
  display: block;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  color: ${props =>
  props.error
    ? `var(--color-error)`
    : `var(--color-dark)`};
  font-family: var(--font-secondary);
  font-size: var(--font-size-m);
  margin-bottom: var(--spacing-xs);
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

  selectedDay?: string;
  selectedMonth?: string;
  selectedYear?: string;
}> {
  constructor(props: Props) {
    super(props);

    this.state = {
      months: [],
      years: [],
      days: [],
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

      if (selectedDay && selectedMonth && selectedYear) {
        this.props.setValue(`${selectedDay}/${selectedMonth}/${selectedYear}`);
      }
    });
  }

  render() {
    const name = this.props.field.name;
    const label = this.props.label;
    const error = getIn(this.props.form.errors, name);
    const touched = getIn(this.props.form.touched, name);
    const errors = touched ? (this.props.serverErrors && this.props.serverErrors[name]) || error : null;

    return (
      <WrapperStyled>
        <LabelStyled error={!!errors}
                     disabled={this.props.disabled}
                     htmlFor={name}>
          {label}
        </LabelStyled>

        <FlexStyled>
          <FormikSelect
            options={this.state.days}
            disabled={this.props.disabled}
            field={{name: 'day', onChange: (event: any) => this.handleChange(event, 'selectedDay')}}
            form={this.props.form}
            placeholder={this.props.translations.dayPlaceholder}
          />
          <FormikSelect
            options={this.state.months}
            disabled={this.props.disabled}
            field={{name: 'month', onChange: (event: any) => this.handleChange(event, 'selectedMonth')}}
            form={this.props.form}
            placeholder={this.props.translations.monthPlaceholder}
          />
          <FormikSelect
            options={this.state.years}
            disabled={this.props.disabled}
            field={{name: 'year', onChange: (event: any) => this.handleChange(event, 'selectedYear')}}
            form={this.props.form}
            placeholder={this.props.translations.yearPlaceholder}
          />
        </FlexStyled>

        {errors && <ErrorMessageStyled>{errors}</ErrorMessageStyled>}
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
        label: month,
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
