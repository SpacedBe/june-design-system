import React from "react";
import {Page, ReactSpecimen} from "catalog";
import {FormikCheckbox, FormikRadiobutton, IconQuestionmark, Button} from "june-design-system";
import {Flex} from 'reflexbox';
import {Field, withFormik} from 'formik';

class FormikRadiobuttonPage extends React.Component {

  componentWillReceiveProps(nextProps) {
    const newValues = nextProps.values;
    const oldValues = this.props.values;

    if (newValues.touched !== oldValues.touched) {
      this.props.setFieldTouched('radiobutton', newValues.touched);
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
              type='radio'
              placeholderText='example placeholder'
              label='Option one'
              name={`radiobutton`}
              component={FormikRadiobutton}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
          </ReactSpecimen>
          <ReactSpecimen>
            <Field
              type='radio'
              placeholderText='example placeholder'
              label='When a label is really long it just shows on multiple lines.'
              name={`radiobutton`}
              component={FormikRadiobutton}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
          </ReactSpecimen>
          <ReactSpecimen>
            <Field
              type='radio'
              placeholderText='example placeholder'
              label='When a label is really long it just shows on multiple lines.'
              name={`radiobutton`}
              tooltip={
                <Button
                  type='button'
                  color='gray-dark'
                  iconOnly={<IconQuestionmark />}
                />
              }
              component={FormikRadiobutton}
              validate={() => (error ? 'This input as an error' : false)}
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
})(FormikRadiobuttonPage);
