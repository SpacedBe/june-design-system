import React from "react";
import { Page, render } from "catalog";
import { FormikInput, FormikSelect, FormikRadiobutton, FormikToggle, IconQuestionmark, IconElectricity, Button } from "june-design-system";
import styled from "styled-components";

export default class FormPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      type: "text",
      disabled: false,
      field: {
        name: "example-input"
      },
      form: {
        errors: { "example-input": null },
        touched: { "example-input": false }
      }
    };
  }

  render(){
    return (
      <Page>
        <h2>Form Section Title</h2>
        <p>
          The title right above is to divide the from into clear sections.
          This text gives more information for every section.
        </p>
        <div>
          <FormikInput
            label="Email*"
            required
            type="email"
            disabled={this.state.disabled}
            placeholderText="placeholder text"
            field={this.state.field}
            form={this.state.form}
          />

          <FormikInput
            label="Password*"
            required
            type="password"
            disabled={this.state.disabled}
            placeholderText="placeholder text"
            field={this.state.field}
            form={this.state.form}
          />
          <div>
            <FormikInput
              label="Postal Code"
              required
              type="number"
              disabled={this.state.disabled}
              placeholderText="placeholder text"
              field={this.state.field}
              form={this.state.form}
            />

            <FormikInput
              label="City"
              required
              type="text"
              disabled={this.state.disabled}
              placeholderText="placeholder text"
              field={this.state.field}
              form={this.state.form}
            />
          </div>
          <FormikSelect
            label="Gender"
            options={[
              { option: "ONE" },
              { option: "TWO" },
              { option: "THREE" },
              { option: "FOUR" }
            ]}
            htmlFor="isSelect"
            error={this.state.error}
            touched={this.state.touched}
            disabled={this.state.disabled}
            field={this.state.field}
            form={this.state.form}
          />

          <div>
            <p>The question linked to the radio buttons is asked here.*</p>
            <FormikRadiobutton
              error={this.state.error}
              label={this.state.label}
              type="radio"
              htmlFor="isRadioButton"
              name="radioCheck"
              label="option one"
              checked={this.state.checked}
            />
            <FormikRadiobutton
              error={this.state.error}
              label={this.state.label}
              type="radio"
              htmlFor="isRadioButton"
              name="radioCheck"
              label="When a label is really long it just shows on multiple lines."
              checked={this.state.checked}
            />
          </div>

          <div>
            <p>The question linked to the checkboxes is asked here.</p>
          </div>
        </div>
        <h2>Form Section Title</h2>
        <p>Select atleast one option below.*</p>

          <FormikToggle
            tooltipToggle={<IconQuestionmark />}
            iconRight={<IconElectricity />}
            label="Toggle with a label"
            error={this.state.error}
            touched={this.state.touched}
            disabled={this.state.disabled}
            field={this.state.field}
            form={this.state.form}
          />

          <FormikToggle
            tooltipToggle={<IconQuestionmark />}
            label="Regular Toggle"
            error={this.state.error}
            touched={this.state.touched}
            disabled={this.state.disabled}
            field={this.state.field}
            form={this.state.form}
          />

          <FormikToggle
            label="Toggle with a long label discription"
            error={this.state.error}
            touched={this.state.touched}
            disabled={this.state.disabled}
            field={this.state.field}
            form={this.state.form}
          />

          <FormikToggle
            iconRight={<IconElectricity />}
            label="Toggle with a label"
            error={this.state.error}
            touched={this.state.touched}
            disabled={this.state.disabled}
            field={this.state.field}
            form={this.state.form}
          />
        <div />
        <div>
          <Button disabled={this.state.disabled}>verzenden</Button>
        </div>
      </Page>
    );
  }
}
