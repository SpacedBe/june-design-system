import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import Autocomplete from "../components/autocomplete";

export default class FormikAutocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'text',
      disabled: false,
      error: false,
      focussed: false,
      current: false,
      label: '',
      userInput: '',
      suggestions: [],
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

  onChangeUserInput(event) {
    this.setState({ userInput: event.target.value })
    console.log(event.target.value)
  };

  render(){
    return (
      <Page>
        ## Autocomplete
        <ReactSpecimen span={3}>
          <Autocomplete
            error={this.state.error}
            focussed={this.state.focussed}
            touched={this.state.touched}
            label="Numbers"
            suggestions={[
              "One",
              "Two",
              "Three",
              "Four",
              "Five",
              "Six",
              "Seven",
              "Eight",
              "Nine",
              "Ten"
            ]}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}
