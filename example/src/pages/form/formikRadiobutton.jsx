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
              checked={this.state.checked}
            />
            <FormikRadiobutton
              error={this.state.error}
              label={this.state.label}
              type="radio"
              htmlFor="isRadioButton"
              name="radioCheck"
              checked={this.state.checked}
            />
          </div>
        </ReactSpecimen>
      </Page>
    );
  }
}
