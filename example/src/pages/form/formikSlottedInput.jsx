import React from 'react';
import {FormGroup, FormikCheckbox, FormikInput, FormikSlottedInput} from 'june-design-system';
import {Page, ReactSpecimen} from 'catalog';
import {Field, Form, Formik, withFormik} from 'formik';
import {Flex} from "reflexbox";

class FormikSlottedInputPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfSlots: 5,
      autoFocus: false,
      hasError: false,
    }
  }

  handleToggle(stateName) {
    this.setState({[stateName]: !this.state[stateName]})
  }

  changeNumberOfSlots(event) {
    this.setState({numberOfSlots: event.target.value})
  }


  render() {
    const {disabled, error} = this.props.values;
    return (
      <Page>
        <Formik>
          <Form>
            <Flex justify={'space-between'} column>
              <Flex wrap>
                <FormGroup className={'wrapper'}>
                  <Field
                    field={{
                      name: 'hasError',
                      value: this.state.hasError,
                      onChange: () => this.handleToggle('hasError')
                    }}
                    form={{
                      errors: {'example-input': null},
                      touched: {'example-input': false}
                    }}
                    label='Has Error'
                    type='checkbox'
                    component={FormikCheckbox}
                  />
                </FormGroup>
                <FormGroup className={'wrapper'}>
                  <Field
                    field={{
                      name: 'autoFocus',
                      value: this.state.autoFocus,
                      onChange: () => this.handleToggle('autoFocus')
                    }}
                    form={{
                      errors: {'example-input': null},
                      touched: {'example-input': false}
                    }}
                    label='Autofocus'
                    type='checkbox'
                    component={FormikCheckbox}
                  />
                </FormGroup>
                <FormGroup className={'wrapper'}>
                  <Field
                    field={{
                      name: 'numberOfSlots',
                      value: this.state.numberOfSlots,
                      onChange: event => this.changeNumberOfSlots(event)
                    }}
                    form={{
                      errors: {'example-input': null},
                      touched: {'example-input': false}
                    }}
                    label='Number of slots'
                    type='number'
                    component={FormikInput}
                  />
                </FormGroup>
              </Flex>
            </Flex>
          </Form>
        </Formik>

        <ReactSpecimen span={3}>
          <Field
            name={`slottedInput`}
            error={this.state.hasError}
            component={FormikSlottedInput}
            numberOfSlots={this.state.numberOfSlots}
            autoFocus={this.state.autoFocus}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({}),
  displayName: 'slottedInputFields',
})(FormikSlottedInputPage);
