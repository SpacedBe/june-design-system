import React from "react";
import { Page, ReactSpecimen } from "catalog";
import { FormikRadiobutton} from "june-design-system";

export default class FormikRadiobuttonPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      error: false,
      checked: false,
      name:"",
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

  render(){
    return (
      <Page>
        ## Radiobutton
        <ReactSpecimen span={3}>
          <div>
            <FormikRadiobutton
              error={this.state.error}
              label={this.state.label}
              type="radio"
              htmlFor="isRadioButton"
              name="radioCheck"
              label="option one"
              checked={this.state.checked}
            />
            <FormikRadiobutton
              error={this.state.error}
              label={this.state.label}
              type="radio"
              htmlFor="isRadioButton"
              name="radioCheck"
              label="When a label is really long it just shows on multiple lines."
              checked={this.state.checked}
            />
          </div>
        </ReactSpecimen>
      </Page>
    );
  }
}
