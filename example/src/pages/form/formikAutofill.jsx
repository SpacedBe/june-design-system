import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikAutoFill, FormikCheckbox} from 'june-design-system';
import {Flex} from 'reflexbox';

export default class FormikAutoFillPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'text',
      disabled: false,
      error: false,
      focussed: false,
      current: false,
      userInput: '',
      suggestions: [],
      field: {
        name: 'example-input',
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

  onChangeUserInput(event) {
    this.setState({userInput: event.target.value})
  };

  render() {
    return (
      <div className='buttons'>
        <Page>
          ## Autofill
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
                  errors: {'example-input': null},
                  touched: {'example-input': false}
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
                  errors: {'example-input': null},
                  touched: {'example-input': false}
                }}
                label='Error'
                type='checkbox'
              />
            </div>

            <div className='wrapper'>
              <FormikCheckbox
                error={false}
                field={{
                  name: 'isDisabled',
                  onChange: () => this.changeDisable()
                }}
                form={{
                  errors: {'example-input': null},
                  touched: {'example-input': false}
                }}
                label='Disabled'
                type='checkbox'
              />
            </div>
          </Flex>

          <ReactSpecimen span={3}>
            <FormikAutoFill
              label='Label Value'
              error={this.state.error}
              focussed={this.state.focussed}
              type={this.state.type}
              disabled={this.state.disabled}
              placeholderText='example placeholder'
              field={this.state.field}
              form={this.state.form}
              current={this.state.current}
            />
          </ReactSpecimen>
        </Page>
      </div>
    );
  }
}
