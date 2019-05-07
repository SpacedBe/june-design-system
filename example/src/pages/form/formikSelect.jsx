import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikCheckbox, FormikSelect, FormGroup} from 'june-design-system';
import {Flex} from 'reflexbox';
import {Field, Form, Formik} from 'formik';

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
      },
      exampleOptions: [
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },
        { label: 'X', value: '3' }
      ]
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
          <Flex>
            <div className='wrapper'>
              <FormikCheckbox
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
              />
            </div>

            <div className='wrapper'>
              <FormikCheckbox
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
              />
            </div>

            <div className='wrapper'>
              <FormikCheckbox
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
              />
            </div>

            <div className='wrapper'>
              <FormikCheckbox
                error={false}
                field={{
                  name: 'isDisabled',
                  value: this.state.disabled,
                  onChange: () => this.changeDisable()
                }}
                form={{
                  errors: { 'example-input': null },
                  touched: { 'example-input': false }
                }}
                label='Disabled'
                type='checkbox'
              />
            </div>
          </Flex>

          ## Normal selector with a placeholder
          <ReactSpecimen span={3}>
            <Formik>
              <Form>
                <FormGroup>
                  <Field
                    label='Gender'
                    htmlFor='isSelect'
                    component={FormikSelect}
                    options={this.state.exampleOptions}
                    error={this.state.error}
                    touched={this.state.touched}
                    disabled={this.state.disabled}
                    field={this.state.field}
                    form={this.state.form}
                  />
                </FormGroup>
              </Form>
            </Formik>
          </ReactSpecimen>

          ## Selector with a placeholder
          <ReactSpecimen span={3}>
          <Formik>
            <Form>
              <FormGroup>
                <Field
                  options={this.state.exampleOptions}
                  htmlFor='isSelect'
                  component={FormikSelect}
                  error={this.state.error}
                  touched={this.state.touched}
                  disabled={this.state.disabled}
                  field={this.state.field}
                  form={this.state.form}
                  placeholder='Select a gender'
                />
              </FormGroup>
            </Form>
          </Formik>
          </ReactSpecimen>
        </Page>
    );
  }
}
