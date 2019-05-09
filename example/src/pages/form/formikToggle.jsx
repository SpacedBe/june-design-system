import React from "react";
import {Page, ReactSpecimen} from "catalog";
import {FormikCheckbox, FormikToggle, IconQuestionmark, IconElectricity, FormGroup, Button} from "june-design-system";
import {Flex} from "reflexbox";
import {Field, Form, Formik} from 'formik';

export default class FormikTogglePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      field: {
        name: 'regular',
        disabled: false,
        touched: false,
      },
    };
  }

  toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled
    });
  }

  toggleTouched() {
    this.setState({
      focussed: !this.state.focussed,
      form: {
        ...this.state.field,
        touched: {
          'example-input': !this.state.field.touched['example-input'],
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
            </Flex>
          </Form>
        </Formik>

         ## Toggle Regular
        <ReactSpecimen span={3}>
          <Formik>
            <Form>
              <FormGroup>
                <Field
                  name="regular"
                  label="Regular Toggle"
                  disabled={this.state.disabled}
                  field={this.state.field}
                  form={this.state.form}
                  component={FormikToggle}
                />
              </FormGroup>
            </Form>
          </Formik>
        </ReactSpecimen>

        ## Toggle Icon Right & Tooltip
        <ReactSpecimen span={3}>
          <Formik>
            <Form>
              <FormGroup>
                <Field
                  name="regular"
                  label="Regular Toggle"
                  disabled={this.state.disabled}
                  field={this.state.field}
                  form={this.state.form}
                  component={FormikToggle}
                  tooltip={<Button type='button' color='gray-dark' iconOnly={<IconQuestionmark />}/>}
                  icon={<IconElectricity fill={this.state.disabled ? 'var(--color-disabled)' : 'var(--color-dark)'} />}
                />
              </FormGroup>
            </Form>
          </Formik>
        </ReactSpecimen>
      </Page>
    );
  }
}
