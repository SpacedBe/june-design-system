import React from "react";
import { Page, ReactSpecimen } from "catalog";
import { FormikRadiobutton, FormGroup } from "june-design-system";

export default class FormikRadiobuttonPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      error: false,
      checked: false,
      focussed: false,
      label: "",
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
      focussed: !this.state.focussed,
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
      error: !this.state.error,
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
              value={this.state.focussed}
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
        </div>
        ## Radiobutton
        <ReactSpecimen span={3}>
          <div>
            <FormGroup>
              <FormikRadiobutton
                error={this.state.error}
                focussed={this.state.focussed}
                type="radio"
                placeholderText="example placeholder"
                field={this.state.field}
                label="option one"
                form={this.state.form}
                name="radioTestName"
              />
            </FormGroup>
            <FormGroup>
              <FormikRadiobutton
                error={this.state.error}
                focussed={this.state.focussed}
                type="radio"
                placeholderText="example placeholder"
                field={this.state.field}
                label="When a label is really long it just shows on multiple lines."
                form={this.state.form}
                name="radioTestName"
              />
            </FormGroup>
          </div>
        </ReactSpecimen>
      </Page>
    );
  }
}
