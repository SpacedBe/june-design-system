import React from "react";
import { Page, render } from "catalog";
import { FormikInput, FormikSelect, FormikCheckbox,FormikRadiobutton, FormikToggle, IconQuestionmark, IconElectricity, Button } from "june-design-system";
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
        <div className={"form"}>
          <section className={"page"}>
            <div className={"container"}>
              <h2>Form Section Title</h2>
              <p>
                The title right above is to divide the from into clear
                sections. This text gives more information for every
                section.
              </p>
              <div>
                <FormikInput
                  label="Email*"
                  required
                  type="email"
                  disabled={this.state.disabled}
                  placeholderText=""
                  field={this.state.field}
                  form={this.state.form}
                />

                <FormikInput
                  label="Password*"
                  required
                  type="password"
                  disabled={this.state.disabled}
                  placeholderText=""
                  field={this.state.field}
                  form={this.state.form}
                />
                <div className={"flex"}>
                  <FormikInput
                    label="Postal Code"
                    required
                    type="number"
                    disabled={this.state.disabled}
                    placeholderText=""
                    field={this.state.field}
                    form={this.state.form}
                  />

                  <FormikInput
                    label="City"
                    required
                    type="text"
                    disabled={this.state.disabled}
                    placeholderText=""
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
              </div>
            </div>

            <div className={"container"}>
              <div>
                <p>
                  The question linked to the radio buttons is asked here.*
                </p>
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
            </div>

            <div className={"container"}>
              <div>
                <p>The question linked to the checkboxes is asked here.</p>
                <FormikCheckbox
                  error={this.state.error}
                  label={this.state.label}
                  type="checkbox"
                  htmlFor="isCheckbox"
                  name="checkboxCheck"
                  label="option one"
                  checked={this.state.checked}
                />
                <FormikCheckbox
                  error={this.state.error}
                  label={this.state.label}
                  type="checkbox"
                  htmlFor="isCheckbox"
                  name="checkboxCheck"
                  label="When a label is really long it just shows on multiple lines."
                  checked={this.state.checked}
                />
              </div>
            </div>

            <div className={"container"}>
              <FormikInput
                label="Textarea*"
                required
                type="text"
                disabled={this.state.disabled}
                placeholderText=""
                field={this.state.field}
                form={this.state.form}
              />
            </div>

            <div className={"container"}>
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
            </div>
            <div className={"button"}>
              <Button
                clear={false}
                color="green"
                disabled
                onClick={0}
                outlined={false}
                rounded={false}
                wide={false}
              >
                Verzenden
              </Button>
            </div>
          </section>
        </div>
      </Page>
    );
  }
}
