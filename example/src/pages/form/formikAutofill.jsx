import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikAutoFill, FormikCheckbox} from 'june-design-system';
import {Flex} from 'reflexbox';
import {Field, withFormik} from "formik";

class FormikAutoFillPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'text',
      userInput: '',
      currentValue: null,
      items: [
        {
          id: 1,
          name: "Antwerpen 1",
        },
        {
          id: 2,
          name: "Antwerpen 2",
        },
        {
          id: 3,
          name: "Antwerpen 3",
        },
        {
          id: 4,
          name: "Bilzen",
        },
        {
          id: 5,
          name: "Gent",
        },
        {
          id: 6,
          name: "Brussel",
        }
      ],
    }
  }

  fetch(search) {
    return new Promise((resolve => {
      setTimeout(() => {
        resolve(this.state.items.filter((item) => item.name.indexOf(search) > -1))
      }, 250);
    }));
  }

  onChange(currentValue) {
    this.setState({ currentValue });
  }

  componentWillReceiveProps(nextProps) {
    const newValues = nextProps.values;
    const oldValues = this.props.values;

    if (newValues.touched !== oldValues.touched) {
      this.props.setFieldTouched('autofill', newValues.touched);
    }
  }

  render() {
    const {disabled, error, allowManualInput} = this.props.values;

    return (
      <Page>
        <Flex>
          <div className='wrapper'>
            <Field
              name={`touched`}
              component={FormikCheckbox}
              label={'Touched'}/>
          </div>
          <div className='wrapper'>
            <Field
              name={`error`}
              component={FormikCheckbox}
              label={'Error'}/>
          </div>

          <div className='wrapper'>
            <Field
              name={`disabled`}
              component={FormikCheckbox}
              label={'Disabled'}/>
          </div>

          <div className='wrapper'>
            <Field
              name={`allowManualInput`}
              component={FormikCheckbox}
              label={'allow manual input'}/>
          </div>
        </Flex>

        <ReactSpecimen span={3}>
          <Field
            name={`postal`}
            type="text"
            component={FormikAutoFill}
            allowManualInput={allowManualInput}
            validate={() => error ? 'This input as an error' : false}
            disabled={disabled}
            onChange={(value) => this.onChange(value)}
            fetch={(search) => this.fetch(search)}
            translations={{
                placeholder: 'Start typing',
                noResults: 'No results',
                manualInput: 'No results - add manual',
              }}
            label={'Autofill example'}/>
        </ReactSpecimen>
        current value
        <div>
          <pre>{JSON.stringify(this.state.currentValue, null, 2)}</pre>
        </div>
      </Page>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({}),
  displayName: 'autoFillForm',
})(FormikAutoFillPage);
