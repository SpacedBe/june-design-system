import React from "react";
import {Page, ReactSpecimen} from "catalog";
import {FormikCheckbox, FormikToggle, IconQuestionmark, IconElectricity, Button} from "june-design-system";
import {Flex} from "reflexbox";
import {Field, withFormik} from 'formik';

class FormikTogglePage extends React.Component {

 componentWillReceiveProps(nextProps) {
    const newValues = nextProps.values;
    const oldValues = this.props.values;

    if (newValues.touched !== oldValues.touched) {
      this.props.setFieldTouched('toggle', newValues.touched);
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
        <ReactSpecimen>
          <Field
            name={`toggle`}
            label='Regular Toggle'
            component={FormikToggle}
            validate={() => (error ? 'This input as an error' : false)}
            disabled={disabled}
          />
        </ReactSpecimen>
        <ReactSpecimen>
           <Field
              name={`toggle`}
              label="Regular Toggle"
              component={FormikToggle}
              tooltip={<Button type='button' color='gray-dark' iconOnly={<IconQuestionmark />}/>}
              icon={<IconElectricity fill={disabled ? 'var(--color-disabled)' : 'var(--color-dark)'} />}
              validate={() => (error ? 'This input as an error' : false)}
              disabled={disabled}
            />
        </ReactSpecimen>
      </Page>
    );
  }
}
export default withFormik({
  mapPropsToValues: () => ({}),
  displayName: 'inputFields',
})(FormikTogglePage);
