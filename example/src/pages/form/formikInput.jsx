import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {Button, FormikCheckbox, FormikInput, IconCalender, IconElectricity} from 'june-design-system';
import {Flex} from 'reflexbox';
import {Field, withFormik} from 'formik';

class FormikInputPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'text',
      current: false,
      suggestions: [],
    }
  }

 componentWillReceiveProps(nextProps) {
    const newValues = nextProps.values;
    const oldValues = this.props.values;

    if (newValues.touched !== oldValues.touched) {
      this.props.setFieldTouched('input', newValues.touched);
    }
  }

  render() {
    const {disabled, error} = this.props.values;
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
        ## Formik Input with label
        <ReactSpecimen span={3}>
          <Field
            name={`input`}
            type='text'
            component={FormikInput}
            validate={() => error ? 'This input as an error' : false}
            disabled={disabled}
            placeholderText='email@spaced.be'
            label={'Email*'}
          />
        </ReactSpecimen>
        ## Formik Input field icon left
        <ReactSpecimen span={3}>
          <Field
            name={`input`}
            type='text'
            component={FormikInput}
            validate={() => error ? 'This input as an error' : false}
            disabled={disabled}
            placeholderText='email@spaced.be'
            label={'Email*'}
            iconLeft={<IconCalender />}
          />
        </ReactSpecimen>
        ## Formik Input field icon right
        <ReactSpecimen span={3}>
          <Field
            name={`input`}
            type='text'
            component={FormikInput}
            validate={() => error ? 'This input as an error' : false}
            disabled={disabled}
            placeholderText='email@spaced.be'
            label={'Email*'}
            iconRight={<IconCalender />}
          />
        </ReactSpecimen>
        ## Formik Input field button outside
        <ReactSpecimen span={3}>
          <Field
            name={`input`}
            type='text'
            component={FormikInput}
            validate={() => error ? 'This input as an error' : false}
            disabled={disabled}
            placeholderText='email@spaced.be'
            label={'Email*'}
            buttonOutsideRight={<Button size={'medium'}>button</Button>}
          />
        </ReactSpecimen>
        ## Formik Input field icon lead
        <ReactSpecimen span={3}>
          <Field
            name={`input`}
            type='text'
            component={FormikInput}
            validate={() => error ? 'This input as an error' : false}
            disabled={disabled}
            placeholderText='email@spaced.be'
            label={'Email*'}
            iconFront={<IconElectricity />}
          />
        </ReactSpecimen>
        ## Formik Input field icon end
        <ReactSpecimen span={3}>
          <Field
            name={`input`}
            type='text'
            component={FormikInput}
            validate={() => error ? 'This input as an error' : false}
            disabled={disabled}
            placeholderText='email@spaced.be'
            label={'Email*'}
            iconEnd={<IconElectricity />}
          />
        </ReactSpecimen>
        ## Formik Input field with hint
        <ReactSpecimen span={3}>
          <Field
            name={`input`}
            type='text'
            component={FormikInput}
            validate={() => error ? 'This input as an error' : false}
            disabled={disabled}
            placeholderText='email@spaced.be'
            label={'Email*'}
            hint={'this is a hint'}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({}),
  displayName: 'inputFields',
})(FormikInputPage);
