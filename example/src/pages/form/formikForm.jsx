import React from "react";
import {
  Container,
  FormGroup,
  FormikInput,
  FormikSelect,
  FormikCheckbox,
  FormikRadiobutton,
  FormikToggle,
  IconQuestionmark,
  IconGas,
  FormikAutoFill,
  Button,
  FormikTextarea,
  FormError,
  FormikDateSelect
} from 'june-design-system';
import {Field, Form, Formik} from "formik";
import {Page, ReactSpecimen} from "catalog";
import {Flex} from 'reflexbox';

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      checked: false,
      focussed: false,
      label: '',
      field: {
        name: 'example-input'
      },
      serverErrors: {
        email: 'test'
      },
      form: {
        errors: {'example-input': null},
        touched: {'example-input': false}
      }
    };
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
    this.handleCheckedChangeTooltip = this.handleCheckedChangeTooltip.bind(this);
    this.handleCheckedChangeIconTooltip = this.handleCheckedChangeIconTooltip.bind(this);
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

  handleCheckedChange() {
    this.setState({checked: !this.state.checked})
  }

  handleCheckedChangeTooltip() {
    this.setState({checkedTooltip: !this.state.checkedTooltip});
  }

  handleCheckedChangeIconTooltip() {
    this.setState({checkedIconRightTooltip: !this.state.checkedIconTooltip})
  }

  render() {
    return (
      <Page>
        ## Example Formik Form
        <Flex className={'buttons'}>
          <div className={'wrapper'}>
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

          <div className={'wrapper'}>
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

          <div className={'wrapper'}>
            <FormikCheckbox
              error={false}
              field={{
                name: 'hasServerError',
                onChange: () => this.toggleServerError()
              }}
              form={{
                errors: {'example-input': null},
                touched: {'example-input': false}
              }}
              label='Has Server Error'
              type='checkbox'
            />
          </div>

          <div className={'wrapper'}>
            <FormikCheckbox
              error={false}
              field={{
                name: 'isDisabled',
                value: this.state.disabled,
                onChange: () => this.toggleDisabled()
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
        <ReactSpecimen>
          <Container>
            <Formik>
              <Form className={'form'}>
                <div className={'container'}>
                  <h2 className={'center'}>Form Section Title</h2>
                  <p className={'center'}>
                    The title right above is to divide the from into clear
                    sections. This text gives more information for every
                    section.
                  </p>
                  <FormGroup>
                    <Field
                      placeholder='email'
                      name='email'
                      type='email'
                      label='Email*'
                      component={FormikInput}
                      error={this.state.error}
                      disabled={this.state.disabled}
                      focussed={this.state.focussed}
                      field={this.state.field}
                      form={this.state.form}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Field
                      placeholder='password'
                      name='password'
                      type='password'
                      label='Password*'
                      hint='Min. 8 characters'
                      component={FormikInput}
                      validate={() => 'This is a validation message'}
                      error={this.state.error}
                      disabled={this.state.disabled}
                      focussed={this.state.focussed}
                      field={this.state.field}
                      form={this.state.form}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Field
                      label='Gender'
                      options={[
                        { label: 'Male', value: '1' },
                        { label: 'Female', value: '2' },
                        { label: 'X', value: '3' }
                      ]}
                      htmlFor='isSelect'
                      name='genderSelect'
                      component={FormikSelect}
                      error={this.state.error}
                      disabled={this.state.disabled}
                      focussed={this.state.focussed}
                      field={this.state.field}
                      form={this.state.form}
                    />
                  </FormGroup>
                  <div className={'flex'}>
                    <FormGroup>
                      <Field
                        placeholder='Postal*'
                        name='Postal'
                        type='Postal'
                        label='Postal*'
                        component={FormikInput}
                        validate={() => 'This is a validation message'}
                        error={this.state.error}
                        disabled={this.state.disabled}
                        focussed={this.state.focussed}
                        field={this.state.field}
                        form={this.state.form}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Field
                        placeholder='city'
                        name='city'
                        type='number'
                        label='City*'
                        component={FormikAutoFill}
                        error={this.state.error}
                        disabled={this.state.disabled}
                        focussed={this.state.focussed}
                        field={this.state.field}
                        form={this.state.form}
                      />
                    </FormGroup>
                  </div>
                  <FormGroup>
                    <Field
                      placeholder='geboortedatum'
                      name='geboortedatum'
                      type='number'
                      label='Geboortedatum'
                      component={FormikDateSelect}
                      error={this.state.error}
                      disabled={this.state.disabled}
                      focussed={this.state.focussed}
                      field={this.state.field}
                      form={this.state.form}
                      translations={{
                        dayPlaceholder: 'dag',
                        monthPlaceholder: 'maand',
                        yearPlaceholder: 'jaar'
                      }}
                    />
                  </FormGroup>
                </div>
                <div className={'container'}>
                  <div>
                    <p>
                      The question linked to the radio buttons is asked
                      here.*
                    </p>
                  </div>
                  <FormGroup>
                    <Field
                      label='Option One'
                      name='radiobutton'
                      component={FormikRadiobutton}
                      error={this.state.error}
                      disabled={this.state.disabled}
                      focussed={this.state.focussed}
                      field={this.state.field}
                      form={this.state.form}
                    />
                    <Field
                      label='Option Two'
                      name='radiobutton'
                      component={FormikRadiobutton}
                      error={this.state.error}
                      disabled={this.state.disabled}
                      focussed={this.state.focussed}
                      field={this.state.field}
                      form={this.state.form}
                    />
                  </FormGroup>
                </div>
                <div className={'container'}>
                  <div>
                    <p>
                      The question linked to the checkboxes is asked here.
                    </p>
                    <FormGroup>
                      <Field
                        component={FormikCheckbox}
                        type='checkbox'
                        name='checkbox'
                        label='option one'
                        error={this.state.error}
                        disabled={this.state.disabled}
                        focussed={this.state.focussed}
                        field={this.state.field}
                        form={this.state.form}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Field
                        component={FormikCheckbox}
                        type='checkbox'
                        name='checkbox'
                        label='When a label is really long it just shows on multiple lines.'
                        error={this.state.error}
                        disabled={this.state.disabled}
                        focussed={this.state.focussed}
                        field={this.state.field}
                        form={this.state.form}
                      />
                    </FormGroup>
                  </div>
                </div>
                <div className={'container'}>
                  <FormGroup>
                    <Field
                      component={FormikTextarea}
                      required
                      label='Textarea *'
                      type='text'
                      placeholderText=''
                      error={this.state.error}
                      disabled={this.state.disabled}
                      focussed={this.state.focussed}
                      field={this.state.field}
                      form={this.state.form}
                    />
                  </FormGroup>
                </div>
                <div>
                  <h2>Form Section Title</h2>
                  <p>Select atleast one option below.*</p>
                  <FormGroup>
                    <Field
                      component={FormikToggle}
                      name='regular'
                      label='Regular Toggle'
                      field={this.state.field}
                      form={this.state.form}
                    />
                  </FormGroup>

                  <FormGroup>
                    <Field
                      component={FormikToggle}
                      label='Toggle with a long label discription'
                      field={this.state.field}
                      form={this.state.form}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Field
                      name='toggleOne'
                      component={FormikToggle}
                      icon={<IconGas fill='#46AAD2' />}
                      tooltip={
                        <Button
                          type='button'
                          color='gray-dark'
                          iconOnly={<IconQuestionmark />}
                        />
                      }
                      label='Toggle with info Icon'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Field
                      name='toggleTwo'
                      component={FormikToggle}
                      tooltip={
                        <Button
                          type='button'
                          color='gray-dark'
                          iconOnly={<IconQuestionmark />}
                        />
                      }
                      label='Toggle with a long label discription and an info icon'
                    />
                  </FormGroup>
                </div>
                <FormGroup className={'center'}>
                  <FormError>This is an example server error!</FormError>
                </FormGroup>

                <FormGroup className={'center'}>
                  <Button
                    clear={false}
                    color='green'
                    disabled
                    rounded={false}
                    wide={false}
                  >
                    Verzenden
                  </Button>
                </FormGroup>
              </Form>
            </Formik>
          </Container>
        </ReactSpecimen>
      </Page>
    );
  }
}
