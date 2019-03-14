import React from "react";
import { Page, ReactSpecimen, render } from "catalog";
import { FormikToggle, IconQuestionmark } from "june-design-system";

export default class FormikTogglePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
        errors: { 'example-input': null },
        touched: { 'example-input': false },
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
  render(){
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
        ## Toggle Regular
        <ReactSpecimen span={3}>
          <FormikToggle
            tooltipToggle={<IconQuestionmark></IconQuestionmark>}
            label="Regular Toggle"
            error={this.state.error}
            touched={this.state.touched}
            disabled={this.state.disabled}
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>

        ## Toggle Long Label
        <ReactSpecimen span={3}>
          <FormikToggle
            tooltipToggle
            label="Toggle with a long label discription"
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