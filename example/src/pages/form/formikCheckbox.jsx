import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikCheckbox, FormGroup} from 'june-design-system';
import {Flex} from 'reflexbox';
import {Field, Form, Formik} from 'formik';

export default class FormikCheckboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      checked: false,
      focussed: false,
      label: '',
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

  toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled
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

  render() {
    return (
        <Page>
         <Formik>
          <Form>
            <Flex>
              <FormGroup className='wrapper'>
                <Field
                  error={false}
                  field={{
                    name: 'isTouched',
                    value: this.state.focussed,
                    onChange: () => this.toggleTouched()
                  }}
                  form={{
                    errors: { 'example-input': null },
                    touched: { 'example-input': false }
                  }}
                  label='Touched'
                  type='checkbox'
                  component={FormikCheckbox}
                />
              </FormGroup>
              <FormGroup className='wrapper'>
                <Field
                  error={false}
                  field={{
                    name: 'hasError',
                    value: this.state.error,
                    onChange: () => this.toggleError()
                  }}
                  form={{
                    errors: { 'example-input': null },
                    touched: { 'example-input': false }
                  }}
                  label='Error'
                  type='checkbox'
                  component={FormikCheckbox}
                />
              </FormGroup>
              <FormGroup className='wrapper'>
                <Field
                  error={false}
                  field={{
                    name: 'isDisabled',
                    onChange: () => this.toggleDisabled()
                  }}
                  form={{
                    errors: { 'example-input': null },
                    touched: { 'example-input': false }
                  }}
                  label='Disabled'
                  type='checkbox'
                  component={FormikCheckbox}
                />
              </FormGroup>
              <FormGroup className='wrapper'>
                <Field
                  error={false}
                  field={{
                    name: 'hasServerError',
                    onChange: () => this.toggleServerError()
                  }}
                  form={{
                    errors: { 'example-input': null },
                    touched: { 'example-input': false }
                  }}
                  label='Has Server Error'
                  type='checkbox'
                  component={FormikCheckbox}
                />
              </FormGroup>
            </Flex>
          </Form>
        </Formik>
          <ReactSpecimen span={3}>
            <Formik>
              <Form>
                <FormGroup>
                  <Field
                    error={this.state.error}
                    focussed={this.state.focussed}
                    type='checkbox'
                    placeholderText='example placeholder'
                    field={this.state.field}
                    label='Option one'
                    form={this.state.form}
                    disabled={this.state.disabled}
                    component={FormikCheckbox}
                  />
                  <Field
                    error={this.state.error}
                    focussed={this.state.focussed}
                    type='checkbox'
                    placeholderText='example placeholder'
                    field={this.state.field}
                    label='When a label is really long it just shows on multiple lines.'
                    disabled={this.state.disabled}
                    form={this.state.form}
                    component={FormikCheckbox}
                  />
                </FormGroup>
              </Form>
            </Formik>
          </ReactSpecimen>
        </Page>
    );
  }
}
