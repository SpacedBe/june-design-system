import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import {FormikAutocomplete} from "june-design-system"
import PropTypes from "prop-types";


export default class FormikAutocompletePage extends React.Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };

  static defaultProps = {
    suggestions: []
  };

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
      activeSuggestion: 0,
      filteredSuggestions: [],
      options: [],
      showSuggestions: false,
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

  onChange = e => {
   console.log("in change func")
  };

  render(){
    return (
      <Page>
        ## Autocomplete
        <input
          type="text"
          onChange={(event) => this.onChange(event)}
          value={this.state.userInput}
        />
        <ReactSpecimen span={3}>
          <FormikAutocomplete
            label="auto"
            showSuggestions={this.state.showSuggestions}
             options={[{ option: "ONE" },
            { option: "TWO" },
            { option: "THREE" },
            { option: "FOUR" }]}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}
