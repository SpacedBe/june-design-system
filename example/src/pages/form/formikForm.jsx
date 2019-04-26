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
  IconElectricity,
  Button,
  FormikTextarea,
  FormError
} from "june-design-system";
import {Field, Form, Formik} from "formik";
import {string} from "prop-types";
import {Page, ReactSpecimen} from "catalog";

export default class FormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      checked: false,
      focussed: false,
      name: string,
      label: "",
      field: {
        name: "example-input"
      },
      serverErrors: {
        email: 'test',
      },
      form: {
        errors: {
          email: null
        },
        touched: {
          email: false
        }
      }
    };
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
    this.handleCheckedChangeTooltip = this.handleCheckedChangeTooltip.bind(this);
    this.handleCheckedChangeIconTooltip = this.handleCheckedChangeIconTooltip.bind(this);
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
      ## Example Form
        <ReactSpecimen>
          <Container>
            <Formik>
              <Form>
                <div className={'form'}>
                  <section className={'page'}>
                    <div className={'container'}>
                      <h2 className={'center'}>Form Section Title</h2>
                      <p className={'center'}>
                        The title right above is to divide the from into
                        clear sections. This text gives more information for
                        every section.
                      </p>
                      <div>
                        <FormGroup>
                          <Field
                            placeholder='email'
                            name='email'
                            type='email'
                            label='Email*'
                            component={FormikInput}
                          />
                        </FormGroup>
                        <FormGroup>
                          <Field
                            placeholder='email'
                            name='password'
                            type='password'
                            label='Password*'
                            hint='Min. 8 characters'
                            component={FormikInput}
                            validate={() => 'This is a validation message'}
                          />
                        </FormGroup>

                        <div className={'flex'}>
                          <FormGroup>
                            <Field
                              placeholder='postalcode'
                              name='postalcode'
                              type='text'
                              label='Postal Code*'
                              component={FormikInput}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Field
                              placeholder='city'
                              name='city'
                              type='number'
                              label='City*'
                              component={FormikInput}
                            />
                          </FormGroup>
                        </div>
                        <FormGroup>
                          <Field
                            label='Gender'
                            options={[
                              { label: 'Male', value: '1' },
                              { label: 'Female', value: '2' },
                              { label: 'X', value: '3' }
                            ]}
                            htmlFor='isSelect'
                            name="genderSelect"
                            component={FormikSelect}
                            />
                        </FormGroup>
                      </div>
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
                        />
                      </FormGroup>
                      <FormGroup>
                        <Field
                          label='Option Two'
                          name='radiobutton'
                          component={FormikRadiobutton}
                        />
                      </FormGroup>
                    </div>

                    <div className={'container'}>
                      <div>
                        <p>
                          The question linked to the checkboxes is asked
                          here.
                        </p>
                        <FormGroup>
                          <Field
                            component={FormikCheckbox}
                            type='checkbox'
                            name='checkbox'
                            label='option one'
                          />
                        </FormGroup>
                        <FormGroup>
                          <Field
                            component={FormikCheckbox}
                            type='checkbox'
                            name='checkbox'
                            label='When a label is really long it just shows on multiple lines.'
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
                          field={this.state.field}
                        />
                      </FormGroup>
                    </div>

                    <div className={'container'}>
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
                          component={FormikToggle}
                          tooltip={<IconQuestionmark />}
                          icon={<IconElectricity />}
                          label='Toggle with an icon'
                          field={this.state.field}
                          form={this.state.form}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Field
                          component={FormikToggle}
                          tooltip={<IconQuestionmark />}
                          label='Toggle with a long label discription and an info icon'
                          field={this.state.field}
                          form={this.state.form}
                        />
                      </FormGroup>
                    </div>
                    <FormGroup className={'center'}>
                      <FormError>
                        This is an example server error!
                      </FormError>
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
                  </section>
                </div>
              </Form>
            </Formik>
          </Container>
        </ReactSpecimen>
      </Page>
    );
  }
}
