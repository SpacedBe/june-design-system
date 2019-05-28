import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikCheckbox} from 'june-design-system';
import {Flex} from 'reflexbox';
import {Field, withFormik} from 'formik';

class FormikCheckboxPage extends React.Component {

  componentWillReceiveProps(nextProps) {
    const newValues = nextProps.values;
    const oldValues = this.props.values;

    if (newValues.touched !== oldValues.touched) {
      this.props.setFieldTouched('checkbox', newValues.touched);
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
        <Flex column>
          <ReactSpecimen>
            <Field
              type='checkbox'
              placeholderText='example placeholder'
              label='Option one'
              name={`checkbox`}
              component={FormikCheckbox}
              validate={() => (error ? 'This select has an error' : false)}
              disabled={disabled}
            />
          </ReactSpecimen>
          <ReactSpecimen>
            <Field
              type='checkbox'
              placeholderText='example placeholder'
              label='When a label is really long it just shows on multiple lines.'
              name={`checkbox`}
              component={FormikCheckbox}
              validate={() => (error ? 'This select has an error' : false)}
              disabled={disabled}
            />
          </ReactSpecimen>
        </Flex>
      </Page>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({}),
  displayName: 'inputFields'
})(FormikCheckboxPage);
