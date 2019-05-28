import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikCheckbox, FormikSelect} from 'june-design-system';
import {Flex} from 'reflexbox';
import {Field, withFormik} from 'formik';

class FormikSelectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
      label: '',
      exampleOptions: [
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },
        { label: 'X', value: '3' }
      ]
    };
  }

  componentWillReceiveProps(nextProps) {
    const newValues = nextProps.values;
    const oldValues = this.props.values;

    if (newValues.touched !== oldValues.touched) {
      this.props.setFieldTouched('select', newValues.touched);
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
        ## Normal selector with a placeholder
        <ReactSpecimen span={3}>
          <Field
            name={`select`}
            component={FormikSelect}
            validate={() => (error ? 'This select has an error' : false)}
            disabled={disabled}
            label={'Gender'}
            options={this.state.exampleOptions}
          />
        </ReactSpecimen>
        ## Selector with a placeholder
        <ReactSpecimen span={3}>
          <Field
            name={`select`}
            component={FormikSelect}
            validate={() => (error ? 'This select has an error' : false)}
            disabled={disabled}
            label={'Gender'}
            options={this.state.exampleOptions}
            placeholder='Select a gender'
          />
        </ReactSpecimen>
      </Page>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({}),
  displayName: 'inputFields'
})(FormikSelectPage);
