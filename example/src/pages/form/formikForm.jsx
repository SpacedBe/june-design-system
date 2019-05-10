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
import {Field, withFormik} from "formik";
import {Page, ReactSpecimen} from "catalog";
import {Flex} from 'reflexbox';

class FormPage extends React.Component {
  constructor(props) {
    super(props);

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

  componentWillReceiveProps(nextProps) {
    const newValues = nextProps.values;
    const oldValues = this.props.values;

    if (newValues.touched !== oldValues.touched) {
      this.props.setFieldTouched('formikform', newValues.touched);
    }
  }

  render() {
    const { disabled, error } = this.props.values;
    return (
      <Page>
        <Flex>
          <div className='wrapper'>
            <Field
              name={`touched`}
              component={FormikCheckbox}
              label={'Touched'}
            />
          </div>
          <div className='wrapper'>
            <Field
              name={`error`}
              component={FormikCheckbox}
              label={'Error'}
            />
          </div>
          <div className='wrapper'>
            <Field
              name={`disabled`}
              component={FormikCheckbox}
              label={'Disabled'}
            />
          </div>
        </Flex>
        <ReactSpecimen>
          <Container>
            <h2>Form Section Title</h2>
            <Field
              placeholder='email'
              name={`formikform`}
              type='email'
              label='Email*'
              component={FormikInput}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
            <br />
            <Field
              placeholder='password'
              name={`formikform`}
              type='password'
              label='Password*'
              hint='Min. 8 characters'
              component={FormikInput}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
            <br />
            <Field
              name={`formikform`}
              component={FormikSelect}
              validate={() => (error ? 'This select has an error' : false)}
              disabled={disabled}
              label={'Gender'}
              options={[
                { label: 'Male', value: '1' },
                { label: 'Female', value: '2' },
                { label: 'X', value: '3' }
              ]}
            />
            <br />
            <Field
              placeholder='Postal*'
              name={`formikform`}
              type='Postal'
              label='Postal*'
              component={FormikInput}
              validate={() => (error ? 'This select has an error' : false)}
              disabled={disabled}
            />
            <br />
            <Field
              name={`formikform`}
              type='text'
              component={FormikAutoFill}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
              translations={{ placeholder: 'Vul in' }}
              label={'City'}
            />
            <br />
            <Field
              placeholder='geboortedatum'
              type='number'
              name={`formikform`}
              label='Geboortedatum'
              component={FormikDateSelect}
              translations={{
                dayPlaceholder: 'dag',
                monthPlaceholder: 'maand',
                yearPlaceholder: 'jaar'
              }}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
            <br />
            <div>
              <p>
                The question linked to the radio buttons is asked here.*
              </p>
            </div>
            <Field
              label='Option One'
              name={`formikform`}
              component={FormikRadiobutton}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
            <Field
              label='Option Two'
              name={`formikform`}
              component={FormikRadiobutton}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
            <br />
            <div>
              <p>The question linked to the checkboxes is asked here.</p>
            </div>
            <Field
              component={FormikCheckbox}
              type='checkbox'
              name={`formikform`}
              label='option one'
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
            <Field
              component={FormikCheckbox}
              type='checkbox'
              name={`formikform`}
              label='When a label is really long it just shows on multiple lines.'
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
            <br />
            <Field
              label='Textarea *'
              type='text'
              placeholderText=''
              name={`formikform`}
              component={FormikTextarea}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
            <br />
            <br />
            <Field
              component={FormikToggle}
              name={`formikform`}
              label='Regular Toggle'
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
            <Field
              component={FormikToggle}
              label='Toggle with a long label discription'
              name={`formikform`}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
            <Field
              component={FormikToggle}
              name={`formikform`}
              icon={<IconGas fill='#46AAD2' />}
              tooltip={
                <Button
                  type='button'
                  color='gray-dark'
                  iconOnly={<IconQuestionmark />}
                />
              }
              label='Toggle with info Icon'
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
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
              name={`formikform`}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
            <Flex column align='center'>
              <FormError>This is an example server error!</FormError>
              <br />
              <Button
                clear={false}
                color='green'
                disabled
                rounded={false}
                wide={false}
              >
                Verzenden
              </Button>
            </Flex>
          </Container>
        </ReactSpecimen>
      </Page>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({}),
  displayName: 'inputFields'
})(FormPage);
