import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikInput} from 'june-design-system';

export default class ButtonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'text',
      disabled: false,
      field: {
        name: 'example-input',
      },
      serverErrors: {
        'example-input': null,
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

  toggleServerError() {
    this.setState({
      serverErrors: {
          'example-input': this.state.serverErrors['example-input'] ? null : 'this input has a server error',
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
        ## Example input
        <ReactSpecimen span={3}>
          <FormikInput
            label="example input"
            type={this.state.type}
            disabled={this.state.disabled}
            serverErrors={this.state.serverErrors}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}>
          </FormikInput>
        </ReactSpecimen>

        <div>
          <div>
            <label htmlFor="isTouched">is touched?</label>
            <input type="checkbox" name="isTouched"
                   onChange={() => this.toggleTouched()}/>
          </div>

          <div>
            <label htmlFor="hasError">has error?</label>
            <input type="checkbox"  name="hasError"
                   onChange={() => this.toggleError()}/>
          </div>

          <div>
            <label htmlFor="hasServerError">has server error?</label>
            <input type="checkbox"  name="hasServerError"
                   onChange={() => this.toggleServerError()}/>
          </div>

          <div>
            <label htmlFor="isDisabled">Disabled?</label>
            <input type="checkbox" value={this.state.disabled} name="isDisabled"
                   onChange={() => this.changeDisable()}/>
          </div>
        </div>
      </Page>
    )
  }
}
