import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import { FormikInput, IconCalender, Button, IconElectricity, IconQuestionmark, FormikCheckbox} from 'june-design-system';
import {Flex} from 'reflexbox';

export default class ButtonPage extends React.Component {
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
      serverErrors: {
        'example-input': null,
      },
      form: {
        errors: { 'example-input': null },
        touched: { 'example-input': false },
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

  onChangeUserInput(event){
    this.setState({ userInput: event.target.value })
  };

  render() {
    return (
      <div className='buttons'>
        <Page>
          ## Input Fields
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
          ## Input field no icon
          <ReactSpecimen span={3}>
            <FormikInput
              label=''
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
          ## Input field icon left
          <ReactSpecimen span={3}>
            <FormikInput
              iconLeft={<IconCalender />}
              label=''
              error={this.state.error}
              disabled={this.state.disabled}
              type={this.state.type}
              placeholderText='example placeholder'
              field={this.state.field}
              form={this.state.form}
            />
          </ReactSpecimen>
          ## Input field icon right
          <ReactSpecimen span={3}>
            <FormikInput
              iconRight={<IconCalender />}
              label=''
              error={this.state.error}
              disabled={this.state.disabled}
              type={this.state.type}
              placeholderText='example placeholder'
              field={this.state.field}
              form={this.state.form}
            />
          </ReactSpecimen>
          ## Input field button inside
          <ReactSpecimen span={3}>
            <FormikInput
              iconRight={<Button size={'medium'}>copy</Button>}
              label=''
              error={this.state.error}
              disabled={this.state.disabled}
              type={this.state.type}
              placeholderText='example placeholder'
              field={this.state.field}
              form={this.state.form}
            />
          </ReactSpecimen>
          ## Input field button outside
          <ReactSpecimen span={3}>
            <FormikInput
              buttonOutsideRight={<Button size={'medium'}>button</Button>}
              label=''
              error={this.state.error}
              disabled={this.state.disabled}
              type={this.state.type}
              placeholderText='example placeholder'
              field={this.state.field}
              form={this.state.form}
            />
          </ReactSpecimen>
          ## Input field icon lead
          <ReactSpecimen span={3}>
            <FormikInput
              iconFront={<IconElectricity />}
              label=''
              error={this.state.error}
              disabled={this.state.disabled}
              type={this.state.type}
              placeholderText='example placeholder'
              field={this.state.field}
              form={this.state.form}
            />
          </ReactSpecimen>
          ## Input field icon end
          <ReactSpecimen span={3}>
            <FormikInput
              iconEnd={<IconElectricity />}
              label=''
              error={this.state.error}
              disabled={this.state.disabled}
              type={this.state.type}
              placeholderText='example placeholder'
              field={this.state.field}
              form={this.state.form}
            />
          </ReactSpecimen>
          ## Input field label
          <ReactSpecimen span={3}>
            <FormikInput
              required
              error={this.state.error}
              disabled={this.state.disabled}
              type={this.state.type}
              placeholderText='example placeholder'
              field={this.state.field}
              form={this.state.form}
            />
          </ReactSpecimen>
          ## Input field required
          <ReactSpecimen span={3}>
            <FormikInput
              required
              label='Label Value *'
              error={this.state.error}
              disabled={this.state.disabled}
              type={this.state.type}
              placeholderText='example placeholder'
              field={this.state.field}
              form={this.state.form}
            />
          </ReactSpecimen>
          ## Input field with tooltip
          <ReactSpecimen span={3}>
            <FormikInput
              toolTip={<IconQuestionmark />}
              label='Label Value'
              error={this.state.error}
              disabled={this.state.disabled}
              type={this.state.type}
              placeholderText='example placeholder'
              field={this.state.field}
              form={this.state.form}
            />
          </ReactSpecimen>
          ## Autocomplete
          <ReactSpecimen span={3}>
            <FormikInput
              tooltip={<Button iconOnly={<IconQuestionmark />} />}
              label='Label Value'
              error={this.state.error}
              disabled={this.state.disabled}
              type={this.state.type}
              placeholderText='example placeholder'
              field={this.state.field}
              form={this.state.form}
            />
          </ReactSpecimen>
        </Page>
      </div>
    );
  }
}
