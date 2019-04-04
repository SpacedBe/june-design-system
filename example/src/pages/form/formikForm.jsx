import React from "react";
import { Container, FormikInput, FormikSelect, FormikCheckbox, FormikRadiobutton, FormikToggle, IconQuestionmark, IconElectricity, Button, FormikTextarea} from "june-design-system";
import { Field, Form, Formik } from "formik";
import { string } from "prop-types";

export default class FormPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      checked: false,
      focussed: false,
      name: string,
      label: "",
      field: {
        name: "example-input"
      },
      serverErrors: {
        email: 'test',
      },
      form: {
        errors: {
          email: null
        },
        touched: {
          email: false
        }
      }
    };
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
    this.handleCheckedChangeTooltip = this.handleCheckedChangeTooltip.bind(this);
    this.handleCheckedChangeIconTooltip = this.handleCheckedChangeIconTooltip.bind(this);
  }

  handleCheckedChange() {
    this.setState({ checked: !this.state.checked })
  }

  handleCheckedChangeTooltip() {
    this.setState({ checkedTooltip: !this.state.checkedTooltip });
  }

  handleCheckedChangeIconTooltip() {
    this.setState({ checkedIconRightTooltip: !this.state.checkedIconTooltip })
  }
  render(){
    return (
      <Container>
        <Formik>
          <Form>
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
                    <Field
                      placeholder="email"
                      name="email"
                      type="email"
                      label="Email*"
                      component={FormikInput}
                    />

                    <Field
                      placeholder="email"
                      name="password"
                      type="password"
                      label="Password*"
                      component={FormikInput}
                    />

                    <div className={"flex"}>
                      <Field
                        placeholder="postalcode"
                        name="postalcode"
                        type="text"
                        label="Postal Code*"
                        component={FormikInput}
                      />
                      <Field
                        placeholder="city"
                        name="city"
                        type="number"
                        label="City*"
                        component={FormikInput}
                      />
                    </div>
                    <Field
                      label="Gender"
                      options={[
                        { label: "ONE", value: "1" },
                        { label: "TWO", value: "2" },
                        { label: "THREE", value: "3" },
                        { label: "FOUR", value: "4" }
                      ]}
                      component={FormikSelect}
                    />
                  </div>
                </div>

                <div className={"container"}>
                  <div>
                    <p>
                      The question linked to the radio buttons is asked
                      here.*
                    </p>
                  </div>
                  <Field
                    label="Option One"
                    name="radiobutton"
                    type="radio"
                    component={FormikRadiobutton}
                  />
                  <Field
                    label="Option Two"
                    name="radiobutton"
                    type="radio"
                    component={FormikRadiobutton}
                  />
                </div>

                <div className={"container"}>
                  <div>
                    <p>
                      The question linked to the checkboxes is asked here.
                    </p>
                    <Field
                      component={FormikCheckbox}
                      type="checkbox"
                      label="option one"
                    />
                    <Field
                      component={FormikCheckbox}
                      type="checkbox"
                      label="When a label is really long it just shows on multiple lines."
                    />
                  </div>
                </div>

                <div className={"container"}>
                <Field
                  component={FormikTextarea}
                   required
                    label="Textarea *"
                    type="text"
                    placeholderText=""
                    field={this.state.field}
                />
                </div>

                <div className={"container"}>
                  <h2>Form Section Title</h2>
                  <p>Select atleast one option below.*</p>
                  <Field
                    component={FormikToggle}
                    name="regular"
                    label="Regular Toggle"
                    field={this.state.field}
                    form={this.state.form}
                  />
                  <Field
                    component={FormikToggle}
                    label="Toggle with a long label discription"
                    field={this.state.field}
                    form={this.state.form}
                  />
                  <Field
                    component={FormikToggle}
                    tooltip={<IconQuestionmark/>}
                    icon={<IconElectricity/>}
                    label="Toggle with an icon"
                    field={this.state.field}
                    form={this.state.form}
                  />
                 <Field
                    component={FormikToggle}
                    tooltip={<IconQuestionmark/>}
                    label="Toggle with a long label discription and an info icon"
                    field={this.state.field}
                    form={this.state.form}
                 />
                  <div/>
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
          </Form>
        </Formik>
      </Container>
    );
  }
}
