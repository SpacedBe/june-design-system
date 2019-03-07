import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikInput, IconCalender, Button, IconElectricity, IconQuestionmark} from 'june-design-system';


export default class ButtonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'text',
      disabled: false,
      error: false,
      focussed: false,
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
    });
  }

  render() {
    return (
      <Page>
        ## Input field no icon
        <ReactSpecimen span={3}>
          <FormikInput
            label=""
            error={this.state.error}
            focussed={this.state.focussed}
            type={this.state.type}
            disabled={this.state.disabled}
            serverErrors={this.state.serverErrors}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}>
          </FormikInput>
        </ReactSpecimen>

        <div>
          <div>
            <label htmlFor="isTouched">Touched</label>
            <input type="checkbox" name="isTouched" value={this.state.focussed}
                   onChange={() => this.toggleTouched()}/>
          </div>

          <div>
            <label htmlFor="hasError">Error</label>
            <input type="checkbox"  name="hasError" value={this.state.error}
                   onChange={() => this.toggleError()}/>
          </div>

          <div>
            <label htmlFor="hasServerError">has server error?</label>
            <input type="checkbox"  name="hasServerError"
                   onChange={() => this.toggleServerError()}/>
          </div>

          <div>
            <label htmlFor="isDisabled">Disabled?</label>
            <input type="checkbox" value={this.state.disabled} name="isDisabled"
              onChange={() => this.changeDisable()}  />
          </div>
        </div>

       ## Input field icon left
        <ReactSpecimen span={3}>
          <FormikInput
            iconLeft={<IconCalender></IconCalender>}
            label=""
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}>
          </FormikInput>
        </ReactSpecimen>

        ## Input field icon right
        <ReactSpecimen span={3}>
          <FormikInput
            iconRight={<IconCalender></IconCalender>}
            label=""
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}>
          </FormikInput>
        </ReactSpecimen>

        ## Input field button inside
        <ReactSpecimen span={3}>
          <FormikInput
            iconRight={<Button size={'big'}>copy</Button>}
            label=""
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}>
          </FormikInput>
        </ReactSpecimen>

        ## Input field button outside
        <ReactSpecimen span={3}>
          <FormikInput
            buttonOutsideRight={<Button size={'big'}>button</Button>}
            label=""
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}>
          </FormikInput>
        </ReactSpecimen>

        ## Input field icon lead
        <ReactSpecimen span={3}>
          <FormikInput
            iconFront={<IconElectricity></IconElectricity>}
            label=""
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}>
          </FormikInput>
        </ReactSpecimen>

        ## Input field icon end
        <ReactSpecimen span={3}>
          <FormikInput
            iconEnd={<IconElectricity></IconElectricity>}
            label=""
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}>
          </FormikInput>
        </ReactSpecimen>

        ## Input field label
        <ReactSpecimen span={3}>
          <FormikInput
            required
            label="Label Value"
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
          >
          </FormikInput>
        </ReactSpecimen>


        ## Input field required
        <ReactSpecimen span={3}>
          <FormikInput
            required
            label="Label Value *"
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}>
          </FormikInput>
        </ReactSpecimen>


        ## Input field with tooltip
        <ReactSpecimen span={3}>
          <FormikInput
            toolTip={<IconQuestionmark></IconQuestionmark>}
            label="Label Value"
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
          >
          </FormikInput>
        </ReactSpecimen>
      </Page>
    )
  }
}
