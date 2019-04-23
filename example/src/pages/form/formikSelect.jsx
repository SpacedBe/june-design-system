import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikSelect} from 'june-design-system';

export default class FormikSelectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      options: [],
      label: "",
      disabled: false,
      error: false,
      touched: false,
      field: {
        name: 'example-input',
      },
      serverErrors: {
        'example-input': null,
      },
      form: {
        errors: {'example-input': null},
        touched: {'example-input': false},
      }
    };
  }

  toggleTouched() {
    this.setState({
      touched: !this.state.touched,
      form: {
        ...this.state.form,
        touched: {
          "example-input": !this.state.form.touched["example-input"]
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
      error: !this.state.error,
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
      disabled: !this.state.disabled,
      form: {
        ...this.state.form,
        errors: {
          'example-input': this.state.form.errors['example-input'] ? null : 'this input is incorrect',
        }
      }
    });
  }

  onChange = e => {
    this.setState({
      userInput: e.currentTarget.value
    });
  };

  render() {
    return (
      <Page>
        <div>
          <div>
            <label htmlFor="isTouched">Touched</label>
            <input
              type="checkbox"
              name="isTouched"
              value={this.state.touched}
              onChange={() => this.toggleTouched()}
            />
          </div>

          <div>
            <label htmlFor="hasError">Error</label>
            <input
              type="checkbox"
              name="hasError"
              value={this.state.error}
              onChange={() => this.toggleError()}
            />
          </div>

          <div>
            <label htmlFor="hasServerError">has server error?</label>
            <input
              type="checkbox"
              name="hasServerError"
              onChange={() => this.toggleServerError()}
            />
          </div>

          <div>
            <label htmlFor="isDisabled">Disabled?</label>
            <input
              type="checkbox"
              value={this.state.disabled}
              name="isDisabled"
              onChange={() => this.changeDisable()}
            />
          </div>
        </div>
        ## Dynamic selector
        <ReactSpecimen span={3}>
          <FormikSelect
            label="Gender"
            options={[
              {label: "ONE", value: "1"},
              {label: "TWO", value: "2"},
              {label: "THREE", value: "3"},
              {label: "FOUR", value: "4"}
            ]}
            htmlFor="isSelect"
            error={this.state.error}
            touched={this.state.touched}
            disabled={this.state.disabled}
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}
