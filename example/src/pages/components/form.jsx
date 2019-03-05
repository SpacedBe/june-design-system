import React from 'react';
import { Page } from 'catalog';
import { FormikInput } from 'june-design-system';

export default class ButtonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'text',
      disabled: false,
      field: {
        name: 'example-input',
      },
      form: {
        errors: { 'example-input': null },
        touched: { 'example-input': false },
      }
    }
  }

  toggleTouched() {
    this.setState({
      form: {
        ...this.state.form,
        touched: {
          'example-input': !this.state.form.touched['example-input'],
        }
      }
    });
  }

  toggleError() {
    this.setState({
      form: {
        ...this.state.form,
        errors: {
          'example-input': this.state.form.errors['example-input'] ? null : 'this input is incorrect',
        }
      }
    });
  }

  changeDisable() {
    this.setState({
      disabled: !this.state.disabled
    });
  }

  render() {
    return (
      <Page>
        <h3>Form section title</h3>
          <FormikInput
            label="Email*"
            type={this.state.type}
            disabled={this.state.disabled}
            placeholderText="placeholder text"
            field={this.state.field}
            form={this.state.form}>
          </FormikInput>

        <FormikInput
          label="Password*"
          type={this.state.type}
          disabled={this.state.disabled}
          placeholderText="placeholder text"
          field={this.state.field}
          form={this.state.form}>
        </FormikInput>

      <div>
        <FormikInput
          label="Postal code"
          type={this.state.type}
          disabled={this.state.disabled}
          placeholderText="placeholder text"
          field={this.state.field}
          form={this.state.form}>
        </FormikInput>

        <FormikInput
          label="City"
          type={this.state.type}
          disabled={this.state.disabled}
          placeholderText="placeholder text"
          field={this.state.field}
          form={this.state.form}>
        </FormikInput>
      </div>

        <FormikInput
          label="Gender*"
          type={this.state.type}
          disabled={this.state.disabled}
          placeholderText="placeholder text"
          field={this.state.field}
          form={this.state.form}>
        </FormikInput>

        <div>
          <div>
            <label htmlFor="isTouched">is touched?</label>
            <input type="checkbox" name="isTouched"
              onChange={() => this.toggleTouched()} />
          </div>

          <div>
            <label htmlFor="hasError">has error?</label>
            <input type="checkbox" name="hasError"
              onChange={() => this.toggleError()} />
          </div>

          <div>
            <label htmlFor="isDisabled">Disabled?</label>
            <input type="checkbox" value={this.state.disabled} name="isDisabled"
              onChange={() => this.changeDisable()} />
          </div>
        </div>
      </Page>
    )
  }
}
