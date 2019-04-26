import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikSelect, FormikCheckbox} from 'june-design-system';
import {Flex} from 'reflexbox';

export default class FormikSelectPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      options: [],
      label: "",
      disabled: false,
      error: false,
      touched: false,
      field: {
        name: 'example-input',
      },
      serverErrors: {
        'example-input': null,
      },
      form: {
        errors: {'example-input': null},
        touched: {'example-input': false},
      }
    };
  }

  toggleTouched() {
    this.setState({
      touched: !this.state.touched,
      form: {
        ...this.state.form,
        touched: {
          "example-input": !this.state.form.touched["example-input"]
        }
      }
    });
  }

  toggleServerError() {
    this.setState({
      serverErrors: {
        'example-input': this.state.serverErrors['example-input'] ? null : 'this input has a server error',
      }
    });
  }

  toggleError() {
    this.setState({
      error: !this.state.error,
      form: {
        ...this.state.form,
        errors: {
          'example-input': this.state.form.errors['example-input'] ? null : 'this input is incorrect',
        }
      }
    });
  }

  changeDisable() {
    this.setState({
      disabled: !this.state.disabled,
      form: {
        ...this.state.form,
        errors: {
          'example-input': this.state.form.errors['example-input'] ? null : 'this input is incorrect',
        }
      }
    });
  }

  onChange = e => {
    this.setState({
      userInput: e.currentTarget.value
    });
  };

  render() {
    return (
      <div className='buttons'>
        <Page>
          ## Dynamic selector
          <Flex>
            <div className='wrapper'>
              <FormikCheckbox
                error={false}
                field={{
                  name: 'isTouched',
                  value: this.state.focussed,
                  onChange: () => this.toggleTouched()
                }}
                form={{
                  errors: { 'example-input': null },
                  touched: { 'example-input': false }
                }}
                label='Touched'
                type='checkbox'
              />
            </div>

            <div className='wrapper'>
              <FormikCheckbox
                error={false}
                field={{
                  name: 'hasError',
                  value: this.state.error,
                  onChange: () => this.toggleError()
                }}
                form={{
                  errors: { 'example-input': null },
                  touched: { 'example-input': false }
                }}
                label='Error'
                type='checkbox'
              />
            </div>

            <div className='wrapper'>
              <FormikCheckbox
                error={false}
                field={{
                  name: 'hasServerError',
                  onChange: () => this.toggleServerError()
                }}
                form={{
                  errors: { 'example-input': null },
                  touched: { 'example-input': false }
                }}
                label='Has Server Error'
                type='checkbox'
              />
            </div>

            <div className='wrapper'>
              <FormikCheckbox
                error={false}
                field={{
                  name: 'isDisabled',
                  value: this.state.disabled,
                  onChange: () => this.changeDisable()
                }}
                form={{
                  errors: { 'example-input': null },
                  touched: { 'example-input': false }
                }}
                label='Disabled'
                type='checkbox'
              />
            </div>
          </Flex>
          <ReactSpecimen span={3}>
            <FormikSelect
              label='Gender'
              options={[
                { label: 'Male', value: '1' },
                { label: 'Female', value: '2' },
                { label: 'X', value: '3' }
              ]}
              htmlFor='isSelect'
              error={this.state.error}
              touched={this.state.touched}
              disabled={this.state.disabled}
              field={this.state.field}
              form={this.state.form}
            />
          </ReactSpecimen>
        </Page>
      </div>
    );
  }
}
