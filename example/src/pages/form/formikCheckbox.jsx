import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikCheckbox} from 'june-design-system';
import {Flex} from 'reflexbox';

export default class FormikCheckboxPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      checked: false,
      focussed: false,
      label: '',
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
    }
  }

  toggleTouched() {
    this.setState({
      focussed: !this.state.focussed,
      form: {
        ...this.state.form,
        touched: {
          'example-input': !this.state.form.touched['example-input'],
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

  toggleDisabled() {
    this.setState({
      disabled: !this.state.disabled
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

  render() {
    return (
      <div className='buttons'>
        <Page>
          ## Checkbox
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
                  onChange: () => this.toggleDisabled()
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
            <div>
              <FormikCheckbox
                error={this.state.error}
                focussed={this.state.focussed}
                type='checkbox'
                placeholderText='example placeholder'
                field={this.state.field}
                label='Option one'
                form={this.state.form}
                disabled={this.state.disabled}
              />
              <FormikCheckbox
                error={this.state.error}
                focussed={this.state.focussed}
                type='checkbox'
                placeholderText='example placeholder'
                field={this.state.field}
                label='When a label is really long it just shows on multiple lines.'
                disabled={this.state.disabled}
                form={this.state.form}
              />
            </div>
          </ReactSpecimen>
        </Page>
      </div>
    );
  }
}
