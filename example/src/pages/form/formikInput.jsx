import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Button, FormikCheckbox, FormikInput, IconCalender, IconElectricity, FormGroup} from 'june-design-system';
import {Flex} from 'reflexbox';
import {Field, Form, Formik} from 'formik';

export default class ButtonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'text',
      disabled: false,
      error: false,
      focussed: false,
      current: false,
      userInput: '',
      suggestions: [],
      field: {
        name: 'example-input',
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

  onChangeUserInput(event) {
    this.setState({userInput: event.target.value})
  };

  render() {
    return (
        <Page>
          ## Input Fields
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
                  errors: {'example-input': null},
                  touched: {'example-input': false}
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
                  errors: {'example-input': null},
                  touched: {'example-input': false}
                }}
                label='Error'
                type='checkbox'
              />
            </div>

            <div className='wrapper'>
              <FormikCheckbox
                error={false}
                field={{
                  name: 'isDisabled',
                  onChange: () => this.changeDisable()
                }}
                form={{
                  errors: {'example-input': null},
                  touched: {'example-input': false}
                }}
                label='Disabled'
                type='checkbox'
              />
            </div>
          </Flex>

        ## Formik Input with label
        <ReactSpecimen span={3}>
            <Formik>
              <Form className={'form'}>
                <FormGroup>
                  <Field
                    placeholder='email'
                    name='email'
                    type='email'
                    label='Email*'
                    placeholderText='example placeholder'
                    component={FormikInput}
                    error={this.state.error}
                    disabled={this.state.disabled}
                    focussed={this.state.focussed}
                    field={this.state.field}
                    form={this.state.form}
                  />
                </FormGroup>
              </Form>
            </Formik>
          </ReactSpecimen>

          ## Formik Input field icon left
          <ReactSpecimen span={3}>
            <Formik>
              <Form className={'form'}>
                <FormGroup>
                  <Field
                    placeholder='email'
                    name='email'
                    type='email'
                    label='Email*'
                    iconLeft={<IconCalender />}
                    placeholderText='example placeholder'
                    component={FormikInput}
                    error={this.state.error}
                    disabled={this.state.disabled}
                    focussed={this.state.focussed}
                    field={this.state.field}
                    form={this.state.form}
                  />
                </FormGroup>
              </Form>
            </Formik>
          </ReactSpecimen>

          ## Formik Input field icon right
          <ReactSpecimen span={3}>
            <Formik>
              <Form className={'form'}>
                <FormGroup>
                  <Field
                    placeholder='email'
                    name='email'
                    type='email'
                    label='Email*'
                    placeholderText='example placeholder'
                    iconRight={<IconCalender />}
                    component={FormikInput}
                    error={this.state.error}
                    disabled={this.state.disabled}
                    focussed={this.state.focussed}
                    field={this.state.field}
                    form={this.state.form}
                  />
                </FormGroup>
              </Form>
            </Formik>
          </ReactSpecimen>

          ## Formik Input field button outside
          <ReactSpecimen span={3}>
            <Formik>
              <Form className={'form'}>
                <FormGroup>
                  <Field
                    placeholder='email'
                    name='email'
                    type='email'
                    label='Email*'
                    placeholderText='example placeholder'
                    buttonOutsideRight={<Button size={'medium'}>button</Button>}
                    component={FormikInput}
                    error={this.state.error}
                    disabled={this.state.disabled}
                    focussed={this.state.focussed}
                    field={this.state.field}
                    form={this.state.form}
                  />
                </FormGroup>
              </Form>
            </Formik>
          </ReactSpecimen>

          ## Formik Input field icon lead
          <ReactSpecimen span={3}>
            <Formik>
              <Form className={'form'}>
                <FormGroup>
                  <Field
                    placeholder='email'
                    name='email'
                    type='email'
                    label='Email*'
                    placeholderText='example placeholder'
                    iconFront={<IconElectricity />}
                    component={FormikInput}
                    error={this.state.error}
                    disabled={this.state.disabled}
                    focussed={this.state.focussed}
                    field={this.state.field}
                    form={this.state.form}
                  />
                </FormGroup>
              </Form>
            </Formik>
          </ReactSpecimen>

          ## Formik Input field icon end
          <ReactSpecimen span={3}>
            <Formik>
              <Form className={'form'}>
                <FormGroup>
                  <Field
                    placeholder='email'
                    name='email'
                    type='email'
                    label='Email*'
                    placeholderText='example placeholder'
                    iconEnd={<IconElectricity />}
                    component={FormikInput}
                    error={this.state.error}
                    disabled={this.state.disabled}
                    focussed={this.state.focussed}
                    field={this.state.field}
                    form={this.state.form}
                  />
                </FormGroup>
              </Form>
            </Formik>
          </ReactSpecimen>

          ## Formik Input field with hint
          <ReactSpecimen span={3}>
            <Formik>
              <Form className={'form'}>
                <FormGroup>
                  <Field
                    placeholder='email'
                    name='email'
                    type='email'
                    label='Email*'
                    placeholderText='example placeholder'
                    hint={'this is a hint'}
                    component={FormikInput}
                    error={this.state.error}
                    disabled={this.state.disabled}
                    focussed={this.state.focussed}
                    field={this.state.field}
                    form={this.state.form}
                  />
                </FormGroup>
              </Form>
            </Formik>
          </ReactSpecimen>
        </Page>
    );
  }
}
