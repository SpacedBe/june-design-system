import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikCheckbox, FormikDateSelect} from 'june-design-system';
import {Flex} from 'reflexbox';
import {Field, withFormik} from 'formik';

class FormikDateSelectPage extends React.Component {

  componentWillReceiveProps(nextProps) {
    const newValues = nextProps.values;
    const oldValues = this.props.values;

    if (newValues.touched !== oldValues.touched) {
      this.props.setFieldTouched('dateSelect', newValues.touched);
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
          <Field
            label='Geboortedatum'
            name={`dateSelect`}
            validate={() => (error ? 'This select has an error' : false)}
            disabled={disabled}
            component={FormikDateSelect}
            translations={{
              dayPlaceholder: 'dag',
              monthPlaceholder: 'maand',
              yearPlaceholder: 'jaar'
            }}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({}),
  displayName: 'inputFields'
})(FormikDateSelectPage);
