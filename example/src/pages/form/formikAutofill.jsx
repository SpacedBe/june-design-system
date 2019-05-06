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
      userInput: '',
      suggestions: [],
      items: [],
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
              items={[
                {name: 'MALE', id: '1', value: '1'},
                {name: 'FEMALE', id: '2', value: '2'},
                {name: 'X', id: '3', value: '3'},
              ]}
              placeholder='example placeholder'
              error={this.state.error}
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
