import React from 'react';
import {Page, ReactSpecimen} from 'catalog';
import {FormikInput, IconCalender, Button, IconElectricity, IconQuestionmark} from 'june-design-system';
import Autoselector from '../components/autoselector';

export default class ButtonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'text',
      disabled: false,
      error: false,
      touched: false,
      current: false,
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

  render() {
    return (
      <Page>
        <div>
          <div>
            <label htmlFor="isTouched">Touched</label>
            <input
              type="checkbox"
              name="isTouched"
              value={this.state.touched}
              onChange={() => this.toggleTouched()}
            />
          </div>

          <div>
            <label htmlFor="hasError">Error</label>
            <input
              type="checkbox"
              name="hasError"
              value={this.state.error}
              onChange={() => this.toggleError()}
            />
          </div>

          <div>
            <label htmlFor="hasServerError">has server error?</label>
            <input
              type="checkbox"
              name="hasServerError"
              onChange={() => this.toggleServerError()}
            />
          </div>

          <div>
            <label htmlFor="isDisabled">Disabled?</label>
            <input
              type="checkbox"
              value={this.state.disabled}
              name="isDisabled"
              onChange={() => this.changeDisable()}
            />
          </div>
        </div>
        ## Input field no icon
        <ReactSpecimen span={3}>
          <FormikInput
            label=""
            error={this.state.error}
            touched={this.state.touched}
            type={this.state.type}
            disabled={this.state.disabled}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
            current={this.state.current}
          />
        </ReactSpecimen>
        ## Input field icon left
        <ReactSpecimen span={3}>
          <FormikInput
            iconLeft={<IconCalender />}
            label=""
            error={this.state.error}
            disabled={this.state.disabled}
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
        ## Input field icon right
        <ReactSpecimen span={3}>
          <FormikInput
            iconRight={<IconCalender />}
            label=""
            error={this.state.error}
            disabled={this.state.disabled}
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
        ## Input field button inside
        <ReactSpecimen span={3}>
          <FormikInput
            iconRight={<Button size={"small"}>copy</Button>}
            label=""
            error={this.state.error}
            disabled={this.state.disabled}
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
        ## Input field button outside
        <ReactSpecimen span={3}>
          <FormikInput
            buttonOutsideRight={<Button size={"small"}>button</Button>}
            label=""
            error={this.state.error}
            disabled={this.state.disabled}
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
        ## Input field icon lead
        <ReactSpecimen span={3}>
          <FormikInput
            iconFront={<IconElectricity />}
            label=""
            error={this.state.error}
            disabled={this.state.disabled}
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
        ## Input field icon end
        <ReactSpecimen span={3}>
          <FormikInput
            iconEnd={<IconElectricity />}
            label=""
            error={this.state.error}
            disabled={this.state.disabled}
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
        ## Input field label
        <ReactSpecimen span={3}>
          <FormikInput
            required
            label="Label Value"
            error={this.state.error}
            disabled={this.state.disabled}
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
        ## Input field required
        <ReactSpecimen span={3}>
          <FormikInput
            required
            label="Label Value *"
            error={this.state.error}
            disabled={this.state.disabled}
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
        ## Input field with tooltip
        <ReactSpecimen span={3}>
          <FormikInput
            tooltip={
              <Button size={"small"}>
                <IconQuestionmark />
              </Button>
            }
            label="Label Value"
            error={this.state.error}
            disabled={this.state.disabled}
            type={this.state.type}
            placeholderText="example placeholder"
            field={this.state.field}
            form={this.state.form}
          />
        </ReactSpecimen>
        ## dynamic selector
        <ReactSpecimen span={3}>
          <Autoselector
            label="Label Value"
            options={[
              "Alligator",
              "Bask",
              "Crocodilian",
              "Death Roll",
              "Badsqsk",
              "Crodsqcodilian",
              "Deathdq Roll",
            ]}
          />
        </ReactSpecimen>
      </Page>
    );
  }
}
