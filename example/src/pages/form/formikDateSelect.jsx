import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikCheckbox, FormikDateSelect, FormGroup} from 'june-design-system';
import {Flex} from 'reflexbox';
import {Field, Form, Formik} from 'formik';

export default class FormikDateSelectPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      field: {
        name: 'example-input',
      },
      disabled: false,
      error: false,
      touched: false,
      form: {
        errors: { 'example-input': null },
        touched: { 'example-input': false },
      }
    }
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
    return(
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
                      onChange: () => this.changeDisable()
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
              </Flex>
            </Form>
          </Formik>
          <ReactSpecimen>
            <Formik>
              <Form>
                <FormGroup>
                  <Field
                  label='Geboortedatum'
                  field={this.state.field}
                  form={this.state.form}
                  error={this.state.error}
                  touched={this.state.touched}
                  disabled={this.state.disabled}
                  component={FormikDateSelect}
                  translations={{ dayPlaceholder: 'dag', monthPlaceholder: 'maand', yearPlaceholder: 'jaar' }}
                  />
                </FormGroup>
              </Form>
            </Formik>
          </ReactSpecimen>
        </Page>
    );
  }
}
