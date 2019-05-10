import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikCheckbox, FormikTextarea} from 'june-design-system';
import {Flex} from 'reflexbox';
import {Field,withFormik} from 'formik';

class FormikTextareaPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'text',
      size: 'medium'
    };
  }

  changeSize(event) {
    this.setState({ size: event.target.value });
  }

  componentWillReceiveProps(nextProps) {
    const newValues = nextProps.values;
    const oldValues = this.props.values;

    if (newValues.touched !== oldValues.touched) {
      this.props.setFieldTouched('textarea', newValues.touched);
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
            <Field name={`error`} component={FormikCheckbox} label={'Error'} />
          </div>
          <div className='wrapper'>
            <Field
              name={`disabled`}
              component={FormikCheckbox}
              label={'Disabled'}
            />
          </div>
        </Flex>
        <ReactSpecimen span={3}>
          <Field
            name={`textarea`}
            label={'Textarea*'}
            size={'xlarge'}
            placeholderText='example placeholder'
            component={FormikTextarea}
            validate={() => (error ? 'This input has an error' : false)}
            disabled={disabled}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({}),
  displayName: 'inputFields'
})(FormikTextareaPage);
