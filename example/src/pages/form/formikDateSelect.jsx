import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import {FormikDateSelect, FormikCheckbox} from 'june-design-system';
import { Flex } from 'reflexbox';

export default class FormikDateSelectPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      field: {
        name: 'example-input',
      },
      disabled: false,
      error: false,
      touched: false,
      form: {
        errors: { 'example-input': null },
        touched: { 'example-input': false },
      }
    }
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

  render(){
    return(
      <div className='buttons'>
        <Page>
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
          <ReactSpecimen>
            <FormikDateSelect
              label='Geboortedatum'
              field={this.state.field}
              form={this.state.form}>
            </FormikDateSelect>
          </ReactSpecimen>
        </Page>
      </div>

    );
  }
}
